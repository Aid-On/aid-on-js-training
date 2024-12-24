import { knock } from '../src/knock008.js';

// No. 08 正の整数? のテスト
describe('No. 08 正の整数?', () => {
  test('デフォルト引数での入力(1)', () => {
    // input number: 1\npositive
    expect(knock()).toBe('input number: 1\npositive');
  });
  test('入力が1のとき (正)', () => {
    expect(knock(1)).toBe('input number: 1\npositive');
  });
  test('入力が-1のとき (負)', () => {
    // input number: -1
    expect(knock(-1)).toBe('input number: -1');
  });
  test('入力が0のとき (0は正ではない)', () => {
    // input number: 0
    expect(knock(0)).toBe('input number: 0');
  });
});
