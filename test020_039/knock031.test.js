import { knock } from "../src/knock031.js";

describe("No. 31 棒グラフ改", () => {
  test("入力が7の場合: n = 7", () => {
    const result = knock(7);
    // 7個の `*` を5個ごとに空白を入れて表示
    expect(result).toBe("***** **");
  });

  test("入力が13の場合: n = 13", () => {
    const result = knock(13);
    // 13個の `*` を5個ごとに空白を入れて表示
    expect(result).toBe("***** ***** ***");
  });

  test("入力が5の場合: n = 5", () => {
    const result = knock(5);
    // 5個の `*` を表示
    expect(result).toBe("*****");
  });

  test("入力が1の場合: n = 1", () => {
    const result = knock(1);
    // 1個の `*` を表示
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

  test("入力が50の場合: n = 50", () => {
    const result = knock(50);
    // 50個の `*` を5個ごとに空白を入れて表示
    expect(result).toBe(
      "***** ***** ***** ***** ***** ***** ***** ***** ***** *****"
    );
  });
});
