import { knock } from '../src/knock019.js';
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

describe('knock019', () => {
  let consoleOutput;

  beforeEach(() => {
    consoleOutput = mockConsoleLog();
  });

  afterEach(() => {
    consoleOutput.restore();
  });

  test('通常の整数値を入力した場合', () => {
    try {
      const cleanupStdin = mockStdin(['1', '2', '3', '4', '5']);
      knock();
      cleanupStdin();
      const expected = '1\n2\n3\n4\n5\n';
      expect(consoleOutput.getLogs()).toBe(expected);
    } catch (e) {
      if (e instanceof TrainingSkipError) return;
      throw e;
    }
  });

  test('全て同じ値を入力した場合', () => {
    try {
      const cleanupStdin = mockStdin(['7', '7', '7', '7', '7']);
      knock();
      cleanupStdin();
      const expected = '7\n7\n7\n7\n7\n';
      expect(consoleOutput.getLogs()).toBe(expected);
    } catch (e) {
      if (e instanceof TrainingSkipError) return;
      throw e;
    }
  });

  test('負の値を含む入力の場合', () => {
    try {
      const cleanupStdin = mockStdin(['-1', '-2', '0', '1', '2']);
      knock();
      cleanupStdin();
      const expected = '-1\n-2\n0\n1\n2\n';
      expect(consoleOutput.getLogs()).toBe(expected);
    } catch (e) {
      if (e instanceof TrainingSkipError) return;
      throw e;
    }
  });

  test('出力が5行であることを確認', () => {
    try {
      const cleanupStdin = mockStdin(['1', '2', '3', '4', '5']);
      knock();
      cleanupStdin();
      const lines = consoleOutput.getLogs().trim().split('\n');
      expect(lines.length).toBe(5);
    } catch (e) {
      if (e instanceof TrainingSkipError) return;
      throw e;
    }
  });

  test('大きな値を入力した場合', () => {
    try {
      const cleanupStdin = mockStdin(['100', '200', '300', '400', '500']);
      knock();
      cleanupStdin();
      const expected = '100\n200\n300\n400\n500\n';
      expect(consoleOutput.getLogs()).toBe(expected);
    } catch (e) {
      if (e instanceof TrainingSkipError) return;
      throw e;
    }
  });

  test('入力値の順序が保持されることを確認', () => {
    try {
      const inputs = ['10', '20', '30', '40', '50'];
      const cleanupStdin = mockStdin(inputs);
      knock();
      cleanupStdin();
      const lines = consoleOutput.getLogs().trim().split('\n');
      lines.forEach((line, index) => {
        expect(line).toBe(inputs[index]);
      });
    } catch (e) {
      if (e instanceof TrainingSkipError) return;
      throw e;
    }
  });
});
