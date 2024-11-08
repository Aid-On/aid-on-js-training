import { knock } from '../src/knock014.js';
import { TrainingSkipError } from '../src/common/TrainingSkipError.js';

// モック関数を使って標準入力をシミュレート
const mockStdin = (value) => {
  const originalStdin = process.stdin;
  process.stdin = {
    ...process.stdin,
    on: jest.fn((event, callback) => {
      if (event === 'data') {
        callback(Buffer.from(value + '\n'));
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

describe('knock014', () => {
  let consoleOutput;

  beforeEach(() => {
    consoleOutput = mockConsoleLog();
  });

  afterEach(() => {
    consoleOutput.restore();
  });

  test('5を入力した場合', () => {
    try {
      const cleanupStdin = mockStdin('5');
      knock();
      cleanupStdin();
      const expected = '5\n4\n3\n2\n1\n0\n';
      expect(consoleOutput.getLogs()).toBe(expected);
    } catch (e) {
      if (e instanceof TrainingSkipError) return;
      throw e;
    }
  });

  test('0を入力した場合', () => {
    try {
      const cleanupStdin = mockStdin('0');
      knock();
      cleanupStdin();
      expect(consoleOutput.getLogs()).toBe('0\n');
    } catch (e) {
      if (e instanceof TrainingSkipError) return;
      throw e;
    }
  });

  test('1を入力した場合', () => {
    try {
      const cleanupStdin = mockStdin('1');
      knock();
      cleanupStdin();
      expect(consoleOutput.getLogs()).toBe('1\n0\n');
    } catch (e) {
      if (e instanceof TrainingSkipError) return;
      throw e;
    }
  });

  test('10を入力した場合', () => {
    try {
      const cleanupStdin = mockStdin('10');
      knock();
      cleanupStdin();
      const expected =
        Array.from({ length: 11 }, (_, i) => 10 - i).join('\n') + '\n';
      expect(consoleOutput.getLogs()).toBe(expected);
    } catch (e) {
      if (e instanceof TrainingSkipError) return;
      throw e;
    }
  });

  test('数値が順番通りに減少することを確認', () => {
    try {
      const inputValue = 7;
      const cleanupStdin = mockStdin(inputValue.toString());
      knock();
      cleanupStdin();
      const lines = consoleOutput.getLogs().trim().split('\n');
      lines.forEach((line, index) => {
        expect(parseInt(line)).toBe(inputValue - index);
      });
    } catch (e) {
      if (e instanceof TrainingSkipError) return;
      throw e;
    }
  });
});
