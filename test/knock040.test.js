import { knock } from "../src/knock040.js";

describe("No. 40 even or odd", () => {
  test("入力例1: 偶数の判定 (6)", () => {
    expect(knock(6)).toBe("6 is even.");
  });

  test("入力例2: 奇数の判定 (7)", () => {
    expect(knock(7)).toBe("7 is odd.");
  });

  test("0の判定", () => {
    expect(knock(0)).toBe("0 is even.");
  });

  test("負の偶数の判定 (-4)", () => {
    expect(knock(-4)).toBe("-4 is even.");
  });

  test("負の奇数の判定 (-5)", () => {
    expect(knock(-5)).toBe("-5 is odd.");
  });

  test("大きな偶数の判定 (1000)", () => {
    expect(knock(1000)).toBe("1000 is even.");
  });

  test("大きな奇数の判定 (9999)", () => {
    expect(knock(9999)).toBe("9999 is odd.");
  });
});
