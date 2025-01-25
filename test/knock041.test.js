import { knock } from "../src/knock041.js";

describe("No. 41 1桁の自然数?", () => {
  test("入力例1: 1桁の自然数 (6)", () => {
    expect(knock(6)).toBe("6 is a single figure.");
  });

  test("入力例2: 2桁の数 (10)", () => {
    expect(knock(10)).toBe("10 is not a single figure.");
  });

  test("入力例3: 負の数 (-3)", () => {
    expect(knock(-3)).toBe("-3 is not a single figure.");
  });

  test("入力例4: 0の判定", () => {
    expect(knock(0)).toBe("0 is not a single figure.");
  });

  test("境界値: 9 (1桁の最大値)", () => {
    expect(knock(9)).toBe("9 is a single figure.");
  });

  test("境界値: 1 (1桁の最小値)", () => {
    expect(knock(1)).toBe("1 is a single figure.");
  });

  test("大きな数の判定 (100)", () => {
    expect(knock(100)).toBe("100 is not a single figure.");
  });
});
