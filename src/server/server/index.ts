import express, { Express, urlencoded } from 'express';
import session from 'express-session';
import 'express-async-errors';

import { Server as HttpServer } from 'http';

import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import passport from 'passport';

import webpack from 'webpack';
import config from '@root/webpack.config';

import router from '@server/routes';
import httpLogger from '@server/middlewares/httpLogger';
import errorLogger from '@server/middlewares/errorLogger';

import Jwt from '@server/strategies/jwt';
import Login from '@server/strategies/login';

import serializeUser from '@server/utils/serializeUser';
import deserializeUser from '@server/utils/deserializeUser';

const compiler = webpack(config);
const secret = String(process.env.JWT_SECRET) || '';

console.log('secret in server:', secret);

export default class Server {
  private app: Express;
  private server!: HttpServer;
  private static instance: Server;

  private constructor() {
    this.app = express();

    this.app.use(
      require('webpack-dev-middleware')(compiler, {
        noInfo: true,
        publicPath: config.find(
          (el) => el.name === 'server',
        )!.output!.publicPath,
      }),
    );

    this.app.use(
      require('webpack-hot-middleware')(compiler, {
        log: false,
        path: `/__webpack_hmr`,
        heartbeat: 10 * 1000,
      }),
    );

    this.app.use(
      urlencoded({
        extended: true,
      }),
    );

    this.app.use(cookieParser());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));

    this.app.use(
      session({
        secret,
        resave: false,
        saveUninitialized: false,
      }),
    );

    this.app.use(passport.initialize());
    this.app.use(passport.session());

    this.app.use(httpLogger);

    this.app.use('/', router);

    passport.use('jwt', Jwt);
    passport.use('login', Login);

    passport.serializeUser(serializeUser);
    passport.deserializeUser(deserializeUser);

    this.app.use(errorLogger);
  }

  public start(port: number) {
    return new Promise<void>((resolve) => {
      this.server = this.app.listen(port, () => {
        resolve();
      });
    });
  }

  public close() {
    return new Promise<void>((resolve) => {
      this.server.close(() => {
        resolve();
      });
    });
  }

  public static getInstance(): Server {
    if (!Server.instance) {
      Server.instance = new Server();
    }

    return Server.instance;
  }
}
