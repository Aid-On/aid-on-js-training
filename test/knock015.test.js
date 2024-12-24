import { knock } from '../src/knock015.js';

// No. 15 2ずつカウントアップ のテスト
describe('No. 15 2ずつカウントアップ', () => {
  test('デフォルト引数 (7)', () => {
    const result = knock();
    // 文字列を行ごとに分割(空行は除く)
    const lines = result.split('\n').filter((line) => line !== '');
    // 最初の行は "input number: 7"
    expect(lines[0]).toBe('input number: 7');
    // 続く行は 0,2,4,6
    const numbers = lines.slice(1).map((line) => Number(line));
    expect(numbers).toEqual([0, 2, 4, 6]);
  });

  test('任意の整数 (10)', () => {
    const result = knock(10);
    const lines = result.split('\n').filter((line) => line !== '');
    expect(lines[0]).toBe('input number: 10');
    // 0,2,4,6,8,10
    const numbers = lines.slice(1).map((line) => Number(line));
    expect(numbers).toEqual([0, 2, 4, 6, 8, 10]);
  });

  test('任意の整数 (5)', () => {
    const result = knock(5);
    const lines = result.split('\n').filter((line) => line !== '');
    expect(lines[0]).toBe('input number: 5');
    // 0,2,4
    const numbers = lines.slice(1).map((line) => Number(line));
    expect(numbers).toEqual([0, 2, 4]);
  });
});
