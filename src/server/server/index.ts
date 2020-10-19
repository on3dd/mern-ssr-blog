import express, { Request, Response, NextFunction, Express } from 'express';
import 'express-async-errors';

import { StatusCodes } from 'http-status-codes';

import router from '@server/routes';
import logger from '@server/shared/Logger';

const webpack = require('webpack');
const webpackConfig = require('@root/webpack.config');
const compiler = webpack(webpackConfig);

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

    this.server.use('/', router);

    // Print API errors
    this.server.use(
      (err: Error, req: Request, res: Response, _: NextFunction) => {
        logger.error(err.message, err);

        return res.status(StatusCodes.BAD_REQUEST).json({
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
