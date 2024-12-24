import { knock } from '../src/knock012.js';

// No. 12 ごあいさつ指定回 のテスト
describe('No. 12 ごあいさつ指定回', () => {
  test('デフォルト引数(7回)', () => {
    const result = knock();
    const lines = result.split('\n').filter((line) => line !== '');
    // 先頭行は "input number: 7"
    expect(lines[0]).toBe('input number: 7');
    // 続く行が "Hello World!" × 7回
    const greetings = lines.slice(1);
    expect(greetings.length).toBe(7);
    greetings.forEach((line) => {
      expect(line).toBe('Hello World!');
    });
  });

  test('3回の入力', () => {
    const result = knock(3);
    const lines = result.split('\n').filter((line) => line !== '');
    expect(lines[0]).toBe('input number: 3');
    const greetings = lines.slice(1);
    expect(greetings.length).toBe(3);
    greetings.forEach((line) => {
      expect(line).toBe('Hello World!');
    });
  });

  test('0回の入力 (Hello World! は表示されない)', () => {
    const result = knock(0);
    const lines = result.split('\n').filter((line) => line !== '');
    expect(lines[0]).toBe('input number: 0');
    // "Hello World!" は0回
    expect(lines.length).toBe(1);
  });

  test('10回の入力', () => {
    const result = knock(10);
    const lines = result.split('\n').filter((line) => line !== '');
    expect(lines[0]).toBe('input number: 10');
    const greetings = lines.slice(1);
    expect(greetings.length).toBe(10);
    greetings.forEach((line) => {
      expect(line).toBe('Hello World!');
    });
  });
});
