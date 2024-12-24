import { knock } from '../src/knock005.js';

// No. 05 入力と四則演算 のテスト
describe('No. 05 入力と四則演算', () => {
  test('デフォルト引数での計算(123, 7)', () => {
    // 123 ÷ 7 の商は 17, 余りは 4
    // 和: 130, 差: 116, 積: 861
    expect(knock()).toBe(
      'input 1st number: 123\n' +
        'input 2nd number: 7\n' +
        '和: 130\n' +
        '差: 116\n' +
        '積: 861\n' +
        '商: 17, 余り: 4'
    );
  });

  test('任意の整数(123, 3)', () => {
    // 123 ÷ 3 の商は 41, 余りは 0
    // 和: 126, 差: 120, 積: 369
    expect(knock(123, 3)).toBe(
      'input 1st number: 123\n' +
        'input 2nd number: 3\n' +
        '和: 126\n' +
        '差: 120\n' +
        '積: 369\n' +
        '商: 41, 余り: 0'
    );
  });

  test('任意の整数(5, 2)', () => {
    // 5 ÷ 2 の商は 2, 余りは 1
    // 和: 7, 差: 3, 積: 10
    expect(knock(5, 2)).toBe(
      'input 1st number: 5\n' +
        'input 2nd number: 2\n' +
        '和: 7\n' +
        '差: 3\n' +
        '積: 10\n' +
        '商: 2, 余り: 1'
    );
  });
});
