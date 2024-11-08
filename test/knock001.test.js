import { knock } from '../src/knock001.js';
import { TrainingSkipError } from '../src/common/TrainingSkipError.js';

describe('knock001', () => {
  test('基本的なケース', () => {
    try {
      expect(knock(1, 2)).toBe(3);
      expect(knock(12345, 23456)).toBe(35801);
    } catch (e) {
      if (e instanceof TrainingSkipError) return;
      throw e;
    }
  });
});
