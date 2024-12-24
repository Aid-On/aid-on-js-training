import { knock } from '../src/knock003.js';

// No. 03 入力 のテスト
describe('No. 03 入力', () => {
  test('デフォルト引数での入力', () => {
    expect(knock()).toBe('input number: 123\nyour number is 123');
  });
  test('任意の整数 456', () => {
    expect(knock(456)).toBe('input number: 456\nyour number is 456');
  });
  test('任意の整数 9999', () => {
    expect(knock(9999)).toBe('input number: 9999\nyour number is 9999');
  });
});
