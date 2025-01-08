import { knock } from "../src/knock026.js";

describe("No. 26 switch-case", () => {
  test("入力が1の場合: number = 1", () => {
    const result = knock(1);
    // 条件に一致するので "one"
    expect(result).toBe("one");
  });

  test("入力が2の場合: number = 2", () => {
    const result = knock(2);
    // 条件に一致するので "two"
    expect(result).toBe("two");
  });

  test("入力が3の場合: number = 3", () => {
    const result = knock(3);
    // 条件に一致するので "three"
    expect(result).toBe("three");
  });

  test("入力が0の場合: number = 0", () => {
    const result = knock(0);
    // 条件に一致しないので "others"
    expect(result).toBe("others");
  });

  test("入力が負の値の場合: number = -1", () => {
    const result = knock(-1);
    // 条件に一致しないので "others"
    expect(result).toBe("others");
  });

  test("入力がその他の値の場合: number = 100", () => {
    const result = knock(100);
    // 条件に一致しないので "others"
    expect(result).toBe("others");
  });
});
