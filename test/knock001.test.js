import { knock } from '../src/knock001.js';

// No. 01 足し算のテスト
describe('No. 01 足し算', () => {
  test('デフォルト引数での計算', () => {
    expect(knock()).toBe(35801);
  });
  test('1 + 2 = 3', () => {
    expect(knock(1, 2)).toBe(3);
  });
  test('5 + 10 = 15', () => {
    expect(knock(5, 10)).toBe(15);
  });
  test('12345 + 23456 = 35801', () => {
    expect(knock(12345, 23456)).toBe(35801);
  });
});
