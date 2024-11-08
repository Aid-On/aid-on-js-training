import { knock } from '../src/knock011.js';
import { TrainingSkipError } from '../src/common/TrainingSkipError.js';

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

describe('knock0011', () => {
  let consoleOutput;

  beforeEach(() => {
    consoleOutput = mockConsoleLog();
  });

  afterEach(() => {
    consoleOutput.restore();
  });

  test('Hello World!を10回表示', () => {
    try {
      knock();
      const expected = Array(10).fill('Hello, World!').join('\n') + '\n';
      expect(consoleOutput.getLogs()).toBe(expected);
    } catch (e) {
      if (e instanceof TrainingSkipError) return;
      throw e;
    }
  });

  test('出力が正確に10行であることを確認', () => {
    try {
      knock();
      const lines = consoleOutput.getLogs().trim().split('\n');
      expect(lines.length).toBe(10);
    } catch (e) {
      if (e instanceof TrainingSkipError) return;
      throw e;
    }
  });

  test('各行が正確にHello, World!であることを確認', () => {
    try {
      knock();
      const lines = consoleOutput.getLogs().trim().split('\n');
      lines.forEach((line) => {
        expect(line).toBe('Hello, World!');
      });
    } catch (e) {
      if (e instanceof TrainingSkipError) return;
      throw e;
    }
  });
});
