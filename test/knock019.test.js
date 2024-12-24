import { knock } from '../src/knock019.js';

// No. 19 配列に入力値を格納 のテスト
describe('No. 19 配列に入力値を格納', () => {
  test('デフォルト引数 ([4, 6, 7, 3, 1])', () => {
    const result = knock();
    const lines = result.split('\n').filter((line) => line !== '');
    // まず最初の5行は "input number: X"
    expect(lines[0]).toBe('input number: 4');
    expect(lines[1]).toBe('input number: 6');
    expect(lines[2]).toBe('input number: 7');
    expect(lines[3]).toBe('input number: 3');
    expect(lines[4]).toBe('input number: 1');
    // 続く5行は 入力値そのもの (4, 6, 7, 3, 1)
    const values = lines.slice(5).map((line) => Number(line));
    expect(values).toEqual([4, 6, 7, 3, 1]);
  });

  test('別の入力 ([9, 8, 7, 6, 5])', () => {
    const input = [9, 8, 7, 6, 5];
    const result = knock(input);
    const lines = result.split('\n').filter((line) => line !== '');
    // "input number: 9", "input number: 8", ... → 5行
    input.forEach((num, i) => {
      expect(lines[i]).toBe(`input number: ${num}`);
    });
    // 続く5行は 9,8,7,6,5
    const values = lines.slice(5).map((line) => Number(line));
    expect(values).toEqual(input);
  });
});
