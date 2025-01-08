import { knock } from "../src/knock027.js";

describe("No. 27 1からnまでの和", () => {
  test("入力が10の場合: n = 10", () => {
    const result = knock(10);
    // 1から10までの総和: 1+2+...+10 = 55
    expect(result).toBe(55);
  });

  test("入力が5の場合: n = 5", () => {
    const result = knock(5);
    // 1から5までの総和: 1+2+3+4+5 = 15
    expect(result).toBe(15);
  });

  test("入力が1の場合: n = 1", () => {
    const result = knock(1);
    // 1から1までの総和: 1
    expect(result).toBe(1);
  });

  test("入力が0の場合: n = 0", () => {
    const result = knock(0);
    // 入力が0以下なので総和は0
    expect(result).toBe(0);
  });

  test("入力が負の値の場合: n = -2", () => {
    const result = knock(-2);
    // 入力が0以下なので総和は0
    expect(result).toBe(0);
  });

  test("入力が大きな値の場合: n = 100", () => {
    const result = knock(100);
    // 1から100までの総和: 5050 (公式: n * (n + 1) / 2)
    expect(result).toBe(5050);
  });
});
