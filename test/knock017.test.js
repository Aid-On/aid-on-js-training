import { knock } from '../src/knock017.js';
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

describe('knock017', () => {
  let consoleOutput;

  beforeEach(() => {
    consoleOutput = mockConsoleLog();
  });

  afterEach(() => {
    consoleOutput.restore();
  });

  test('配列の要素が順番に表示されること', () => {
    try {
      knock();
      const expected =
        Array.from({ length: 10 }, (_, i) => i).join('\n') + '\n';
      expect(consoleOutput.getLogs()).toBe(expected);
    } catch (e) {
      if (e instanceof TrainingSkipError) return;
      throw e;
    }
  });

  test('出力が10行であることを確認', () => {
    try {
      knock();
      const lines = consoleOutput.getLogs().trim().split('\n');
      expect(lines.length).toBe(10);
    } catch (e) {
      if (e instanceof TrainingSkipError) return;
      throw e;
    }
  });

  test('各要素の値がインデックスと一致することを確認', () => {
    try {
      knock();
      const lines = consoleOutput.getLogs().trim().split('\n');
      lines.forEach((line, index) => {
        expect(parseInt(line)).toBe(index);
      });
    } catch (e) {
      if (e instanceof TrainingSkipError) return;
      throw e;
    }
  });

  test('最初の要素が0であることを確認', () => {
    try {
      knock();
      const firstLine = consoleOutput.getLogs().split('\n')[0];
      expect(parseInt(firstLine)).toBe(0);
    } catch (e) {
      if (e instanceof TrainingSkipError) return;
      throw e;
    }
  });

  test('最後の要素が9であることを確認', () => {
    try {
      knock();
      const lines = consoleOutput.getLogs().trim().split('\n');
      const lastLine = lines[lines.length - 1];
      expect(parseInt(lastLine)).toBe(9);
    } catch (e) {
      if (e instanceof TrainingSkipError) return;
      throw e;
    }
  });
});
