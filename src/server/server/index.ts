import express, {
  Request,
  Response,
  NextFunction,
  Express,
  urlencoded,
} from 'express';
import 'express-async-errors';

import { Server as HttpServer } from 'http';
import { StatusCodes } from 'http-status-codes';

import router from '@server/routes';
import ErrorHandler from '@server/shared/ErrorHandler';
import httpLogger from '@server/middlewares/httpLogger';

const webpack = require('webpack');
const webpackConfig = require('@root/webpack.config');
const compiler = webpack(webpackConfig);

const errorHandler = ErrorHandler.getInstance();

export default class Server {
  private app: Express;
  private server!: HttpServer;
  private static instance: Server;

  private constructor() {
    this.app = express();

    this.app.use(
      require('webpack-dev-middleware')(compiler, {
        noInfo: true,
        publicPath: webpackConfig.output.publicPath,
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

    // Print API errors
    this.app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
      errorHandler.handleError(err);

      return res.status(StatusCodes.BAD_REQUEST).json({
        data: null,
        error: err.message,
      });
    });
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
