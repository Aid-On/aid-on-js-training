import { TrainingSkipError } from './common/TrainingSkipError.js';

/**
 *
 */
export const knock = () => {
  throw new TrainingSkipError();
};
