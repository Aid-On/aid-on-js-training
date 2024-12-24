import { knock } from '../src/knock002.js';

// No. 02 余り のテスト
describe('No. 02 余り', () => {
  test('デフォルト引数での計算', () => {
    expect(knock()).toBe(4);
  });
  test('5 ÷ 3', () => {
    expect(knock(5, 3)).toBe(2);
  });
  test('10 ÷ 2', () => {
    expect(knock(10, 2)).toBe(0);
  });
  test('13 ÷ 4', () => {
    expect(knock(13, 4)).toBe(1);
  });
});
