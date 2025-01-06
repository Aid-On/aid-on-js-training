import { knock } from "../src/knock018.js";

// No. 18 配列を入力値で初期化 のテスト
describe("No. 18", () => {
  test("デフォルト引数(6)", () => {
    const result = knock(6);
    expect(result.length).toBe(10);
    expect(result).toBe([6, 6, 6, 6, 6, 6, 6, 6, 6, 6]);
  });

  test("入力 9 の場合", () => {
    const result = knock(9);
    expect(result.length).toBe(10);
    expect(result).toBe([9, 9, 9, 9, 9, 9, 9, 9, 9, 9]);
  });

  test("入力 0 の場合", () => {
    const result = knock(0);
    expect(result.length).toBe(10);
    expect(result).toBe([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  });
});
