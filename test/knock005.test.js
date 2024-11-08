import { knock } from '../src/knock005.js';
import { TrainingSkipError } from '../src/common/TrainingSkipError.js';

// モック関数を使って標準入力をシミュレート
const mockStdin = (values) => {
  const originalStdin = process.stdin;
  let callCount = 0;
  process.stdin = {
    ...process.stdin,
    on: jest.fn((event, callback) => {
      if (event === 'data') {
        callback(Buffer.from(values[callCount] + '\n'));
        callCount++;
      }
    }),
  };
  return () => {
    process.stdin = originalStdin;
  };
};

// モック関数を使って標準出力をキャプチャ
const mockConsoleLog = () => {
  const originalLog = console.log;
  const logs = [];
  console.log = jest.fn((...args) => {
    logs.push(args.join(' '));
  });
  return {
    getLogs: () => logs.join('\n') + '\n',
    restore: () => {
      console.log = originalLog;
    },
  };
};

describe('knock005', () => {
  let consoleOutput;

  beforeEach(() => {
    consoleOutput = mockConsoleLog();
  });

  afterEach(() => {
    consoleOutput.restore();
  });

  test('基本的な正の整数の計算', () => {
    try {
      const cleanupStdin = mockStdin(['10', '3']);
      knock();
      cleanupStdin();
      const expected =
        '13\n' + // 和: 10 + 3
        '7\n' + // 差: 10 - 3
        '30\n' + // 積: 10 * 3
        '3\n' + // 商: 10 ÷ 3
        '1\n'; // 余り: 10 % 3
      expect(consoleOutput.getLogs()).toBe(expected);
    } catch (e) {
      if (e instanceof TrainingSkipError) return;
      throw e;
    }
  });

  test('0を含む計算', () => {
    try {
      const cleanupStdin = mockStdin(['8', '0']);
      knock();
      cleanupStdin();
      const expected =
        '8\n' + // 和: 8 + 0
        '8\n' + // 差: 8 - 0
        '0\n' + // 積: 8 * 0
        'Error\n' + // 商: 8 ÷ 0 (エラー)
        'Error\n'; // 余り: 8 % 0 (エラー)
      expect(consoleOutput.getLogs()).toBe(expected);
    } catch (e) {
      if (e instanceof TrainingSkipError) return;
      throw e;
    }
  });

  test('負の整数を含む計算', () => {
    try {
      const cleanupStdin = mockStdin(['-5', '2']);
      knock();
      cleanupStdin();
      const expected =
        '-3\n' + // 和: -5 + 2
        '-7\n' + // 差: -5 - 2
        '-10\n' + // 積: -5 * 2
        '-2\n' + // 商: -5 ÷ 2
        '-1\n'; // 余り: -5 % 2
      expect(consoleOutput.getLogs()).toBe(expected);
    } catch (e) {
      if (e instanceof TrainingSkipError) return;
      throw e;
    }
  });

  test('同じ値の計算', () => {
    try {
      const cleanupStdin = mockStdin(['4', '4']);
      knock();
      cleanupStdin();
      const expected =
        '8\n' + // 和: 4 + 4
        '0\n' + // 差: 4 - 4
        '16\n' + // 積: 4 * 4
        '1\n' + // 商: 4 ÷ 4
        '0\n'; // 余り: 4 % 4
      expect(consoleOutput.getLogs()).toBe(expected);
    } catch (e) {
      if (e instanceof TrainingSkipError) return;
      throw e;
    }
  });

  test('大きな数値の計算', () => {
    try {
      const cleanupStdin = mockStdin(['100', '30']);
      knock();
      cleanupStdin();
      const expected =
        '130\n' + // 和: 100 + 30
        '70\n' + // 差: 100 - 30
        '3000\n' + // 積: 100 * 30
        '3\n' + // 商: 100 ÷ 30
        '10\n'; // 余り: 100 % 30
      expect(consoleOutput.getLogs()).toBe(expected);
    } catch (e) {
      if (e instanceof TrainingSkipError) return;
      throw e;
    }
  });
});
