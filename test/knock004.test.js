import { knock } from '../src/knock004.js';
import { TrainingSkipError } from '../src/common/TrainingSkipError.js';

describe('knock004', () => {
  test('基本的なケース', () => {
    try {
      expect(knock()).toBe('Hello, World!\n');
    } catch (e) {
      if (e instanceof TrainingSkipError) return;
      throw e;
    }
  });
});
