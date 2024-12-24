import { knock } from '../src/knock004.js';

// No. 04 入力と計算 のテスト
describe('No. 04 入力と計算', () => {
  test('デフォルト引数での入力', () => {
    expect(knock()).toBe('input number: 123\nanswer = 369');
  });
  test('任意の整数 1', () => {
    expect(knock(1)).toBe('input number: 1\nanswer = 3');
  });
  test('任意の整数 10', () => {
    expect(knock(10)).toBe('input number: 10\nanswer = 30');
  });
  test('任意の整数 99', () => {
    expect(knock(99)).toBe('input number: 99\nanswer = 297');
  });
});
