import morgan from 'morgan';
import { stream } from '@server/shared/Logger';

const httpLogger = morgan('dev', { stream });

export default httpLogger;
