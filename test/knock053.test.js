import { knock } from "../src/knock053.js";

describe("No. 53 素因数分解", () => {
  test("入力例1: 複数の素因数を持つ数 (12)", () => {
    expect(knock(12)).toBe("12 = 2 × 2 × 3");
  });

  test("入力例2: 素数 (13)", () => {
    expect(knock(13)).toBe("13 = 13");
  });

  test("入力例3: 複数の異なる素因数 (20)", () => {
    expect(knock(20)).toBe("20 = 2 × 2 × 5");
  });

  test("2の累乗 (16)", () => {
    expect(knock(16)).toBe("16 = 2 × 2 × 2 × 2");
  });

  test("大きな素数 (97)", () => {
    expect(knock(97)).toBe("97 = 97");
  });

  test("複数の異なる素因数を持つ大きな数 (100)", () => {
    expect(knock(100)).toBe("100 = 2 × 2 × 5 × 5");
  });

  test("3つの異なる素因数 (30)", () => {
    expect(knock(30)).toBe("30 = 2 × 3 × 5");
  });

  test("エラーケース: 1", () => {
    expect(() => knock(1)).toThrow("2以上の整数を入力してください");
  });

  test("エラーケース: 0", () => {
    expect(() => knock(0)).toThrow("2以上の整数を入力してください");
  });

  test("エラーケース: 負の数", () => {
    expect(() => knock(-10)).toThrow("2以上の整数を入力してください");
  });
});
