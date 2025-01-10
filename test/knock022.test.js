import { knock } from "../src/knock022.js";

describe("No. 22", () => {
  test("入力が10の場合: number = 10", () => {
    const result = knock(10);
    // 条件に一致するので "OK"
    expect(result).toBe("OK");
  });

  test("入力が-10の場合: number = -10", () => {
    const result = knock(-10);
    // 条件に一致するので "OK"
    expect(result).toBe("OK");
  });

  test("入力が-11の場合: number = -11", () => {
    const result = knock(-11);
    // 条件に一致するので "OK"
    expect(result).toBe("OK");
  });

  test("入力が9の場合: number = 9", () => {
    const result = knock(9);
    // 条件に一致しないので空文字列
    expect(result).toBe("");
  });

  test("入力が0の場合: number = 0", () => {
    const result = knock(0);
    // 条件に一致しないので空文字列
    expect(result).toBe("");
  });

  test("入力が100の場合: number = 100", () => {
    const result = knock(100);
    // 条件に一致するので "OK"
    expect(result).toBe("OK");
  });
});
