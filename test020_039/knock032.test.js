import { knock } from "../src/knock032.js";

describe("No. 32 5の倍数でbar", () => {
  test("1から20の出力が正しい", () => {
    // knock関数を実行して結果を取得
    const result = knock();

    // 期待される出力
    const expectedOutput = [
      1,
      2,
      3,
      4,
      "bar",
      6,
      7,
      8,
      9,
      "bar",
      11,
      12,
      13,
      14,
      "bar",
      16,
      17,
      18,
      19,
      "bar",
    ];

    // 結果が期待される出力と一致することを確認
    expect(result).toEqual(expectedOutput);
  });
});
