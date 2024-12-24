import { knock } from '../src/knock006.js';

// No. 06 0? のテスト
describe('No. 06 0?', () => {
  test('デフォルト引数での入力(0)', () => {
    // input number: 0\nzero
    expect(knock()).toBe('input number: 0\nzero');
  });

  test('入力が0のとき', () => {
    expect(knock(0)).toBe('input number: 0\nzero');
  });

  test('入力が1のとき (1 は 0 以外なので "zero" は表示しない)', () => {
    // input number: 1
    expect(knock(1)).toBe('input number: 1');
  });

  test('入力が-1のとき (-1 は 0 以外なので "zero" は表示しない)', () => {
    // input number: -1
    expect(knock(-1)).toBe('input number: -1');
  });
});
