import { knock } from "../src/knock056.js";

describe("No. 56 2進数変換", () => {
  test("入力例1: 13を2進数に変換", () => {
    expect(knock(13)).toBe("1101");
  });

  test("入力例2: 8を2進数に変換", () => {
    expect(knock(8)).toBe("1000");
  });

  test("入力例3: 0を2進数に変換", () => {
    expect(knock(0)).toBe("0");
  });

  test("2の累乗の変換: 16", () => {
    expect(knock(16)).toBe("10000");
  });

  test("大きな数の変換: 255", () => {
    expect(knock(255)).toBe("11111111");
  });

  test("1を2進数に変換", () => {
    expect(knock(1)).toBe("1");
  });

  test("複雑な数の変換: 123", () => {
    expect(knock(123)).toBe("1111011");
  });

  test("エラーケース: 負の数", () => {
    expect(() => knock(-1)).toThrow("0以上の整数を入力してください");
    expect(() => knock(-128)).toThrow("0以上の整数を入力してください");
  });

  test("大きな2の累乗: 1024", () => {
    expect(knock(1024)).toBe("10000000000");
  });
});
