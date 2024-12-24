import { knock } from '../src/knock011.js';

// No. 11 ごあいさつ10回 のテスト
describe('No. 11 ごあいさつ10回', () => {
  test('Hello World! を10回繰り返しているか', () => {
    const result = knock();
    const lines = result.split('\n').filter((line) => line !== '');

    // 10行あることを確認
    expect(lines.length).toBe(10);

    // 各行が "Hello World!" になっていることを確認
    lines.forEach((line) => {
      expect(line).toBe('Hello World!');
    });
  });
});
