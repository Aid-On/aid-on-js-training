import { knock } from '../src/knock002.js';
import { TrainingSkipError } from '../src/common/TrainingSkipError.js';

describe('knock002', () => {
  test('基本的なケース', () => {
    try {
      expect(knock()).toBe('1');
    } catch (e) {
      if (e instanceof TrainingSkipError) return;
      throw e;
    }
  });
});
