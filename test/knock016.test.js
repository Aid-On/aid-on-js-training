import { knock } from "../src/knock016.js";

// No. 16 0でおしまい のテスト
describe("No. 16 0でおしまい", () => {
  test("デフォルト引数 ([5, 3, -4, 0])", () => {
    // 5 → 3 → -4 → 0 で終了
    const result = knock();
    const lines = result.split("\n").filter((line) => line !== "");
    expect(lines).toEqual([
      "input number: 5",
      "input number: 3",
      "input number: -4",
      "input number: 0",
    ]);
  });

  test("途中で0が出る ([10, 1, 0, 99])", () => {
    // 10 → 1 → 0 で終了 (以降の 99 は無視)
    const result = knock([10, 1, 0, 99]);
    const lines = result.split("\n").filter((line) => line !== "");
    expect(lines).toEqual([
      "input number: 10",
      "input number: 1",
      "input number: 0",
    ]);
  });

  test("最初から0が入力される ([0, 1, 2])", () => {
    // 0 で即終了
    const result = knock([0, 1, 2]);
    const lines = result.split("\n").filter((line) => line !== "");
    expect(lines).toEqual(["input number: 0"]);
  });
});
