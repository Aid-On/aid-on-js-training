import { knock } from "../src/knock028.js";

describe("No. 28 nの階乗", () => {
  test("入力が10の場合: n = 10", () => {
    const result = knock(10);
    // 10! = 1 × 2 × 3 × ... × 10 = 3628800
    expect(result).toBe(3628800);
  });

  test("入力が5の場合: n = 5", () => {
    const result = knock(5);
    // 5! = 1 × 2 × 3 × 4 × 5 = 120
    expect(result).toBe(120);
  });

  test("入力が1の場合: n = 1", () => {
    const result = knock(1);
    // 1! = 1
    expect(result).toBe(1);
  });

  test("入力が0の場合: n = 0", () => {
    const result = knock(0);
    // 0! = 1（数学的定義）
    expect(result).toBe(1);
  });

  test("入力が負の値の場合: n = -2", () => {
    const result = knock(-2);
    // 負の値の階乗は1を返す
    expect(result).toBe(1);
  });
});
