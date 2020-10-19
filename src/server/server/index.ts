import express, {
  Request,
  Response,
  NextFunction,
  Express,
  urlencoded,
} from 'express';
import 'express-async-errors';

import { StatusCodes } from 'http-status-codes';

import router from '@server/routes';
import ErrorHandler from '@server/shared/ErrorHandler';
import httpLogger from '@server/middlewares/httpLogger';

const webpack = require('webpack');
const webpackConfig = require('@root/webpack.config');
const compiler = webpack(webpackConfig);

const errorHandler = ErrorHandler.getInstance();

export default class Server {
  private server: Express;
  private static instance: Server;

  private constructor() {
    this.server = express();

    this.server.use(
      require('webpack-dev-middleware')(compiler, {
        noInfo: true,
        publicPath: webpackConfig.output.publicPath,
      }),
    );

    this.server.use(
      require('webpack-hot-middleware')(compiler, {
        log: false,
        path: `/__webpack_hmr`,
        heartbeat: 10 * 1000,
      }),
    );

    this.server.use(
      urlencoded({
        extended: true,
      }),
    );

    this.server.use(httpLogger);

    this.server.use('/', router);

    // Print API errors
    this.server.use(
      (err: Error, req: Request, res: Response, _: NextFunction) => {
        errorHandler.handleError(err);

        return res.status(StatusCodes.BAD_REQUEST).json({
          data: null,
          error: err.message,
        });
      },
    );
  }

  public start(port: number) {
    return new Promise<void>((resolve) => {
      this.server.listen(port, () => {
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
