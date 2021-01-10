import express, { Express, urlencoded } from 'express';
import 'express-async-errors';

import { Server as HttpServer } from 'http';

import router from '@server/routes';
import httpLogger from '@server/middlewares/httpLogger';
import errorHandler from '@server/middlewares/errorLogger';

import webpack, { Configuration } from 'webpack';
import config from '@root/webpack.config';

const webpackConfig = config as Configuration[];
const compiler = webpack(webpackConfig);

export default class Server {
  private app: Express;
  private server!: HttpServer;
  private static instance: Server;

  private constructor() {
    this.app = express();

    this.app.use(
      require('webpack-dev-middleware')(compiler, {
        noInfo: true,
        publicPath: webpackConfig.find(
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

    this.app.use(httpLogger);

    this.app.use('/', router);

    // Must be placed after the router
    this.app.use(errorHandler);
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
