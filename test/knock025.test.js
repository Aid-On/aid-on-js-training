import { knock } from "../src/knock025.js";

describe("No. 25 -10未満?、-10以上0未満?、0以上?", () => {
  test("入力が-15の場合: number = -15", () => {
    const result = knock(-15);
    // -10未満なので "range 1"
    expect(result).toBe("range 1");
  });

  test("入力が-10の場合: number = -10", () => {
    const result = knock(-10);
    // -10以上0未満なので "range 2"
    expect(result).toBe("range 2");
  });

  test("入力が-5の場合: number = -5", () => {
    const result = knock(-5);
    // -10以上0未満なので "range 2"
    expect(result).toBe("range 2");
  });

  test("入力が0の場合: number = 0", () => {
    const result = knock(0);
    // 0以上なので "range 3"
    expect(result).toBe("range 3");
  });

  test("入力が10の場合: number = 10", () => {
    const result = knock(10);
    // 0以上なので "range 3"
    expect(result).toBe("range 3");
  });

  test("入力が-100の場合: number = -100", () => {
    const result = knock(-100);
    // -10未満なので "range 1"
    expect(result).toBe("range 1");
  });
});
