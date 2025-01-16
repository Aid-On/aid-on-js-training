import { knock } from "../src/knock038.js";

describe("No. 38 さらに・配列要素の参照", () => {
  test("10回の参照が正しい", () => {
    const result = knock();
    // 期待される結果
    const expected = [3, 8, 5, 1, 7, 6, 9, 2, 0, 3];
    expect(result).toEqual(expected);
  });

  test("結果の長さが10であることを確認", () => {
    const result = knock();
    expect(result.length).toBe(10);
  });

  test("初回の参照が正しい", () => {
    const result = knock();
    expect(result[0]).toBe(3); // 最初は array[0] = 3
  });
});
