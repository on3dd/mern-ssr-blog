import express, {
  Request,
  Response,
  NextFunction
} from 'express';
import 'express-async-errors';

import { StatusCodes } from 'http-status-codes';

import router from '@server/routes';
import logger from '@server/shared/Logger';

const server = express();

const webpack = require('webpack');
const webpackConfig = require('@root/webpack.config');
const compiler = webpack(webpackConfig);

server.use(require("webpack-dev-middleware")(compiler, {
  noInfo: true, publicPath: webpackConfig.output.publicPath
}));

server.use(require("webpack-hot-middleware")(compiler, {
  log: false,
  path: `/__webpack_hmr`,
  heartbeat: 10 * 1000,
}));

server.use('/', router);

// Print API errors
server.use((err: Error, req: Request, res: Response, _: NextFunction) => {
  logger.error(err.message, err);

  return res
    .status(StatusCodes.BAD_REQUEST)
    .json({
      error: err.message,
    });
});

export default server;
