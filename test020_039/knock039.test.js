import { knock } from "../src/knock039.js";

describe("No. 39 もっと・配列要素の参照", () => {
  test("隣接する要素の引き算が正しい", () => {
    const result = knock();
    // 期待される結果
    const expected = [-4, 7, -8, 4, 3, -8, 3, 1, 3];
    expect(result).toEqual(expected);
  });

  test("結果の長さが9であることを確認", () => {
    const result = knock();
    expect(result.length).toBe(9);
  });

  test("最初の計算が正しい: array[0] - array[1]", () => {
    const result = knock();
    expect(result[0]).toBe(-4); // 3 - 7 = -4
  });

  test("最後の計算が正しい: array[8] - array[9]", () => {
    const result = knock();
    expect(result[8]).toBe(3); // 5 - 2 = 3
  });
});
