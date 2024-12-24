import { knock } from '../src/knock014.js';

// No. 14 カウントダウン のテスト
describe('No. 14 カウントダウン', () => {
  test('デフォルト引数 (5)', () => {
    const result = knock();
    const lines = result.split('\n').filter((line) => line !== '');
    // 先頭行は "input number: 5"
    expect(lines[0]).toBe('input number: 5');
    // 5 から 0 まで
    const numbers = lines.slice(1).map((line) => Number(line));
    expect(numbers.length).toBe(6);
    expect(numbers).toEqual([5, 4, 3, 2, 1, 0]);
  });

  test('任意の整数 (3)', () => {
    const result = knock(3);
    const lines = result.split('\n').filter((line) => line !== '');
    expect(lines[0]).toBe('input number: 3');
    const numbers = lines.slice(1).map((line) => Number(line));
    expect(numbers).toEqual([3, 2, 1, 0]);
  });

  test('任意の整数 (10)', () => {
    const result = knock(10);
    const lines = result.split('\n').filter((line) => line !== '');
    expect(lines[0]).toBe('input number: 10');
    const numbers = lines.slice(1).map((line) => Number(line));
    expect(numbers).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
  });
});
