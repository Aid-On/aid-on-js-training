import { knock } from '../src/knock008.js';
import { TrainingSkipError } from '../src/common/TrainingSkipError.js';

describe('knock008', () => {
  test('基本的なケース', () => {
    try {
      expect(knock()).toBe('Hello, World!\n');
    } catch (e) {
      if (e instanceof TrainingSkipError) return;
      throw e;
    }
  });
});
