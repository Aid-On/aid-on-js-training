import { knock } from "../src/knock030.js";

describe("No. 30 棒グラフ", () => {
  test("入力が7の場合: n = 7", () => {
    const result = knock(7);
    // 7個の `*` を返す
    expect(result).toBe("*******");
  });

  test("入力が13の場合: n = 13", () => {
    const result = knock(13);
    // 13個の `*` を返す
    expect(result).toBe("*************");
  });

  test("入力が1の場合: n = 1", () => {
    const result = knock(1);
    // 1個の `*` を返す
    expect(result).toBe("*");
  });

  test("入力が0の場合: n = 0", () => {
    const result = knock(0);
    // 空文字列を返す
    expect(result).toBe("");
  });

  test("入力が負の値の場合: n = -5", () => {
    const result = knock(-5);
    // 空文字列を返す
    expect(result).toBe("");
  });

  test("入力が大きな値の場合: n = 50", () => {
    const result = knock(50);
    // 50個の `*` を返す
    expect(result).toBe("*".repeat(50));
  });
});
