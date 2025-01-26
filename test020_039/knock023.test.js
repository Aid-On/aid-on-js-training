import { knock } from "../src/knock023.js";

describe("No. 23 -5以上10未満", () => {
  test("入力が0の場合: number = 0", () => {
    const result = knock(0);
    // 条件に一致するので "OK"
    expect(result).toBe("OK");
  });

  test("入力が-5の場合: number = -5", () => {
    const result = knock(-5);
    // 条件に一致するので "OK"
    expect(result).toBe("OK");
  });

  test("入力が9の場合: number = 9", () => {
    const result = knock(9);
    // 条件に一致するので "OK"
    expect(result).toBe("OK");
  });

  test("入力が-6の場合: number = -6", () => {
    const result = knock(-6);
    // 条件に一致しないので "NG"
    expect(result).toBe("NG");
  });

  test("入力が10の場合: number = 10", () => {
    const result = knock(10);
    // 条件に一致しないので "NG"
    expect(result).toBe("NG");
  });

  test("入力が100の場合: number = 100", () => {
    const result = knock(100);
    // 条件に一致しないので "NG"
    expect(result).toBe("NG");
  });
});
