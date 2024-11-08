import { knock } from '../src/knock016.js';
import { TrainingSkipError } from '../src/common/TrainingSkipError.js';

// モック関数を使って複数回の標準入力をシミュレート
const mockStdin = (values) => {
  const originalStdin = process.stdin;
  let currentIndex = 0;

  process.stdin = {
    ...process.stdin,
    on: jest.fn((event, callback) => {
      if (event === 'data' && currentIndex < values.length) {
        callback(Buffer.from(values[currentIndex] + '\n'));
        currentIndex++;
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

describe('knock016', () => {
  let consoleOutput;

  beforeEach(() => {
    consoleOutput = mockConsoleLog();
  });

  afterEach(() => {
    consoleOutput.restore();
  });

  test('すぐに0を入力した場合', () => {
    try {
      const cleanupStdin = mockStdin(['0']);
      knock();
      cleanupStdin();
      expect(consoleOutput.getLogs()).toBe('\n');
    } catch (e) {
      if (e instanceof TrainingSkipError) return;
      throw e;
    }
  });

  test('複数の非0の後に0を入力した場合', () => {
    try {
      const cleanupStdin = mockStdin(['5', '3', '1', '0']);
      knock();
      cleanupStdin();
      expect(consoleOutput.getLogs()).toBe('\n');
    } catch (e) {
      if (e instanceof TrainingSkipError) return;
      throw e;
    }
  });

  test('負の値の後に0を入力した場合', () => {
    try {
      const cleanupStdin = mockStdin(['-5', '-1', '0']);
      knock();
      cleanupStdin();
      expect(consoleOutput.getLogs()).toBe('\n');
    } catch (e) {
      if (e instanceof TrainingSkipError) return;
      throw e;
    }
  });

  test('大きな値の後に0を入力した場合', () => {
    try {
      const cleanupStdin = mockStdin(['1000', '500', '0']);
      knock();
      cleanupStdin();
      expect(consoleOutput.getLogs()).toBe('\n');
    } catch (e) {
      if (e instanceof TrainingSkipError) return;
      throw e;
    }
  });

  test('様々な値の組み合わせの後に0を入力した場合', () => {
    try {
      const cleanupStdin = mockStdin(['10', '-5', '3', '0']);
      knock();
      cleanupStdin();
      expect(consoleOutput.getLogs()).toBe('\n');
    } catch (e) {
      if (e instanceof TrainingSkipError) return;
      throw e;
    }
  });
});
