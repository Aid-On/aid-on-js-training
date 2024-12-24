import { knock } from '../src/knock007.js';

// No. 07 0 or not 0 のテスト
describe('No. 07 0 or not 0', () => {
  test('デフォルト引数での入力(0)', () => {
    // input number: 0\nzero
    expect(knock()).toBe('input number: 0\nzero');
  });

  test('入力が0のとき', () => {
    expect(knock(0)).toBe('input number: 0\nzero');
  });

  test('入力が1のとき (1 は 0 以外)', () => {
    // input number: 1\nnot zero
    expect(knock(1)).toBe('input number: 1\nnot zero');
  });

  test('入力が-1のとき (-1 は 0 以外)', () => {
    // input number: -1\nnot zero
    expect(knock(-1)).toBe('input number: -1\nnot zero');
  });
});
