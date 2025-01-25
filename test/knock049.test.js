import { knock } from "../src/knock049.js";

describe("No. 49 九九", () => {
  test("九九の表が正しく生成される", () => {
    const expected = 
      " 1  2  3  4  5  6  7  8  9\n" +
      " 2  4  6  8 10 12 14 16 18\n" +
      " 3  6  9 12 15 18 21 24 27\n" +
      " 4  8 12 16 20 24 28 32 36\n" +
      " 5 10 15 20 25 30 35 40 45\n" +
      " 6 12 18 24 30 36 42 48 54\n" +
      " 7 14 21 28 35 42 49 56 63\n" +
      " 8 16 24 32 40 48 56 64 72\n" +
      " 9 18 27 36 45 54 63 72 81";
    
    expect(knock()).toBe(expected);
  });

  test("各行の長さが正しい", () => {
    const result = knock().split("\n");
    // 各行が27文字（9個の数字 × 3文字分のスペース）
    result.forEach(line => {
      expect(line.length).toBe(27);
    });
  });

  test("各数値が右詰めで表示される", () => {
    const result = knock().split("\n");
    // 1桁の数字の前にスペースがあることを確認
    expect(result[0]).toMatch(/^ 1/); // 最初の数字
    expect(result[0]).toMatch(/ 2/);  // 2番目の数字
  });

  test("最後の行に改行がない", () => {
    const result = knock();
    expect(result.endsWith("\n")).toBe(false);
  });
});
