import { knock } from '../src/knock007.js';
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

describe('knock007', () => {
  let consoleOutput;

  beforeEach(() => {
    consoleOutput = mockConsoleLog();
  });

  afterEach(() => {
    consoleOutput.restore();
  });

  test('0を入力した場合', () => {
    try {
      const cleanupStdin = mockStdin('0');
      knock();
      cleanupStdin();
      expect(consoleOutput.getLogs()).toBe('zero\n');
    } catch (e) {
      if (e instanceof TrainingSkipError) return;
      throw e;
    }
  });

  test('正の値を入力した場合', () => {
    try {
      const cleanupStdin = mockStdin('5');
      knock();
      cleanupStdin();
      expect(consoleOutput.getLogs()).toBe('not zero\n');
    } catch (e) {
      if (e instanceof TrainingSkipError) return;
      throw e;
    }
  });

  test('負の値を入力した場合', () => {
    try {
      const cleanupStdin = mockStdin('-3');
      knock();
      cleanupStdin();
      expect(consoleOutput.getLogs()).toBe('not zero\n');
    } catch (e) {
      if (e instanceof TrainingSkipError) return;
      throw e;
    }
  });
});
