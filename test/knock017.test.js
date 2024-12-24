import { knock } from '../src/knock017.js';

// No. 17 配列を初期化 のテスト
describe('No. 17 配列を初期化', () => {
  test('配列の初期値を順に表示', () => {
    // 結果を行ごとに分割
    const lines = knock()
      .split('\n')
      .filter((line) => line !== '');
    // 要素数10（0~9）
    expect(lines.length).toBe(10);
    // 0から9まで順に表示されているか
    lines.forEach((line, index) => {
      expect(line).toBe(String(index));
    });
  });
});
