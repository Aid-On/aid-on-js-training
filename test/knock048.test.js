import { knock } from "../src/knock048.js";

describe("No. 48 繰り返し計算", () => {
  test("入力例1: 7から始める計算", () => {
    expect(knock(7)).toBe("7 → 22 → 11 → 34 → 17 → 52 → 26 → 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1");
  });

  test("入力例2: 8から始める計算", () => {
    expect(knock(8)).toBe("8 → 4 → 2 → 1");
  });

  test("最小の正の整数 (1)", () => {
    expect(knock(1)).toBe("1");
  });

  test("2から始める計算", () => {
    expect(knock(2)).toBe("2 → 1");
  });

  test("大きな数から始める計算 (20)", () => {
    expect(knock(20)).toBe("20 → 10 → 5 → 16 → 8 → 4 → 2 → 1");
  });

  test("エラーケース: 0以下の値", () => {
    expect(() => knock(0)).toThrow("正の整数を入力してください");
    expect(() => knock(-1)).toThrow("正の整数を入力してください");
  });
});
