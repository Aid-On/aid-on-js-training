import { knock } from '../src/knock012.js';
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

describe('knock012', () => {
  let consoleOutput;

  beforeEach(() => {
    consoleOutput = mockConsoleLog();
  });

  afterEach(() => {
    consoleOutput.restore();
  });

  test('5回繰り返しの場合', () => {
    try {
      const cleanupStdin = mockStdin('5');
      knock();
      cleanupStdin();
      const expected = Array(5).fill('Hello, World!').join('\n') + '\n';
      expect(consoleOutput.getLogs()).toBe(expected);
    } catch (e) {
      if (e instanceof TrainingSkipError) return;
      throw e;
    }
  });

  test('1回の場合', () => {
    try {
      const cleanupStdin = mockStdin('1');
      knock();
      cleanupStdin();
      expect(consoleOutput.getLogs()).toBe('Hello, World!\n');
    } catch (e) {
      if (e instanceof TrainingSkipError) return;
      throw e;
    }
  });

  test('0回の場合', () => {
    try {
      const cleanupStdin = mockStdin('0');
      knock();
      cleanupStdin();
      expect(consoleOutput.getLogs()).toBe('\n');
    } catch (e) {
      if (e instanceof TrainingSkipError) return;
      throw e;
    }
  });

  test('10回の場合', () => {
    try {
      const cleanupStdin = mockStdin('10');
      knock();
      cleanupStdin();
      const expected = Array(10).fill('Hello, World!').join('\n') + '\n';
      expect(consoleOutput.getLogs()).toBe(expected);
    } catch (e) {
      if (e instanceof TrainingSkipError) return;
      throw e;
    }
  });

  test('出力行数が入力値と一致することを確認', () => {
    try {
      const inputValue = '7';
      const cleanupStdin = mockStdin(inputValue);
      knock();
      cleanupStdin();
      const lines = consoleOutput.getLogs().trim().split('\n');
      expect(lines.length).toBe(parseInt(inputValue));
    } catch (e) {
      if (e instanceof TrainingSkipError) return;
      throw e;
    }
  });
});
