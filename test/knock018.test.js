import { knock } from '../src/knock018.js';
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

describe('knock018', () => {
  let consoleOutput;

  beforeEach(() => {
    consoleOutput = mockConsoleLog();
  });

  afterEach(() => {
    consoleOutput.restore();
  });

  test('正の値を入力した場合', () => {
    try {
      const cleanupStdin = mockStdin('5');
      knock();
      cleanupStdin();
      const expected = Array(10).fill('5').join('\n') + '\n';
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
      const expected = Array(10).fill('0').join('\n') + '\n';
      expect(consoleOutput.getLogs()).toBe(expected);
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
      const expected = Array(10).fill('-3').join('\n') + '\n';
      expect(consoleOutput.getLogs()).toBe(expected);
    } catch (e) {
      if (e instanceof TrainingSkipError) return;
      throw e;
    }
  });

  test('出力が10行であることを確認', () => {
    try {
      const cleanupStdin = mockStdin('7');
      knock();
      cleanupStdin();
      const lines = consoleOutput.getLogs().trim().split('\n');
      expect(lines.length).toBe(10);
    } catch (e) {
      if (e instanceof TrainingSkipError) return;
      throw e;
    }
  });

  test('全ての要素が入力値と同じであることを確認', () => {
    try {
      const inputValue = '42';
      const cleanupStdin = mockStdin(inputValue);
      knock();
      cleanupStdin();
      const lines = consoleOutput.getLogs().trim().split('\n');
      lines.forEach((line) => {
        expect(line).toBe(inputValue);
      });
    } catch (e) {
      if (e instanceof TrainingSkipError) return;
      throw e;
    }
  });

  test('大きな値を入力した場合', () => {
    try {
      const cleanupStdin = mockStdin('1000');
      knock();
      cleanupStdin();
      const expected = Array(10).fill('1000').join('\n') + '\n';
      expect(consoleOutput.getLogs()).toBe(expected);
    } catch (e) {
      if (e instanceof TrainingSkipError) return;
      throw e;
    }
  });
});
