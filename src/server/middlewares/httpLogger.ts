import morgan from 'morgan';
import { stream } from '@server/shared/Logger';

export default morgan('dev', { stream });
