import { knock } from '../src/knock013.js';

// No. 13 カウントアップ のテスト
describe('No. 13 カウントアップ', () => {
  test('デフォルト引数 (5)', () => {
    const result = knock();
    const lines = result.split('\n').filter((line) => line !== '');
    // 先頭行は input number: 5
    expect(lines[0]).toBe('input number: 5');
    // 0 から 5 まで
    const numbers = lines.slice(1).map((line) => Number(line));
    expect(numbers.length).toBe(6);
    expect(numbers).toEqual([0, 1, 2, 3, 4, 5]);
  });

  test('任意の整数 (3)', () => {
    const result = knock(3);
    const lines = result.split('\n').filter((line) => line !== '');
    expect(lines[0]).toBe('input number: 3');
    const numbers = lines.slice(1).map((line) => Number(line));
    expect(numbers).toEqual([0, 1, 2, 3]);
  });

  test('任意の整数 (10)', () => {
    const result = knock(10);
    const lines = result.split('\n').filter((line) => line !== '');
    expect(lines[0]).toBe('input number: 10');
    const numbers = lines.slice(1).map((line) => Number(line));
    expect(numbers).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
