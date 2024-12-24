import { knock } from '../src/knock018.js';

// No. 18 配列を入力値で初期化 のテスト
describe('No. 18 配列を入力値で初期化', () => {
  test('デフォルト引数(6)', () => {
    const result = knock();
    const lines = result.split('\n').filter((line) => line !== '');
    // 先頭行は "input number: 6"
    expect(lines[0]).toBe('input number: 6');
    // 続く行は同じ値(6)が 10 行
    const values = lines.slice(1).map((line) => Number(line));
    expect(values.length).toBe(10);
    values.forEach((val) => {
      expect(val).toBe(6);
    });
  });

  test('入力 9 の場合', () => {
    const result = knock(9);
    const lines = result.split('\n').filter((line) => line !== '');
    expect(lines[0]).toBe('input number: 9');
    const values = lines.slice(1).map((line) => Number(line));
    expect(values.length).toBe(10);
    values.forEach((val) => {
      expect(val).toBe(9);
    });
  });

  test('入力 0 の場合', () => {
    const result = knock(0);
    const lines = result.split('\n').filter((line) => line !== '');
    expect(lines[0]).toBe('input number: 0');
    const values = lines.slice(1).map((line) => Number(line));
    expect(values.length).toBe(10);
    values.forEach((val) => {
      expect(val).toBe(0);
    });
  });
});
