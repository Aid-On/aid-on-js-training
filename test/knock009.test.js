import { knock } from '../src/knock009.js';

// No. 09 正? 負? 0? のテスト
describe('No. 09 正? 負? 0?', () => {
  test('デフォルト引数での入力(1)', () => {
    // input number: 1\npositive
    expect(knock()).toBe('input number: 1\npositive');
  });
  test('入力が1のとき (正)', () => {
    expect(knock(1)).toBe('input number: 1\npositive');
  });
  test('入力が-1のとき (負)', () => {
    // input number: -1\nnegative
    expect(knock(-1)).toBe('input number: -1\nnegative');
  });
  test('入力が0のとき (0はzero)', () => {
    // input number: 0\nzero
    expect(knock(0)).toBe('input number: 0\nzero');
  });
});
