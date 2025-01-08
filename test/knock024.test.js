import { knock } from "../src/knock024.js";

describe("No. 24 -10以上0未満、または10以上", () => {
  test("入力が-5の場合: number = -5", () => {
    const result = knock(-5);
    // 条件に一致するので "OK"
    expect(result).toBe("OK");
  });

  test("入力が-10の場合: number = -10", () => {
    const result = knock(-10);
    // 条件に一致するので "OK"
    expect(result).toBe("OK");
  });

  test("入力が0の場合: number = 0", () => {
    const result = knock(0);
    // 条件に一致しないので "NG"
    expect(result).toBe("NG");
  });

  test("入力が10の場合: number = 10", () => {
    const result = knock(10);
    // 条件に一致するので "OK"
    expect(result).toBe("OK");
  });

  test("入力が5の場合: number = 5", () => {
    const result = knock(5);
    // 条件に一致しないので "NG"
    expect(result).toBe("NG");
  });

  test("入力が100の場合: number = 100", () => {
    const result = knock(100);
    // 条件に一致するので "OK"
    expect(result).toBe("OK");
  });

  test("入力が-11の場合: number = -11", () => {
    const result = knock(-11);
    // 条件に一致しないので "NG"
    expect(result).toBe("NG");
  });
});
