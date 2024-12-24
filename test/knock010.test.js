import { knock } from '../src/knock010.js';

// No. 10 絶対値 のテスト
describe('No. 10 絶対値', () => {
  test('デフォルト引数での入力(1)', () => {
    // input number: 1\nabsolute value is 1
    expect(knock()).toBe('input number: 1\nabsolute value is 1');
  });
  test('入力が1の場合', () => {
    expect(knock(1)).toBe('input number: 1\nabsolute value is 1');
  });
  test('入力が-2の場合', () => {
    // input number: -2\nabsolute value is 2
    expect(knock(-2)).toBe('input number: -2\nabsolute value is 2');
  });
  test('入力が0の場合', () => {
    // input number: 0\nabsolute value is 0
    expect(knock(0)).toBe('input number: 0\nabsolute value is 0');
  });
});
