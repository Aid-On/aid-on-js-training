import { knock } from "../src/knock042.js";

describe("No. 42 小さい順?", () => {
  test("入力例1: 昇順の場合 (1, 2, 3)", () => {
    expect(knock(1, 2, 3)).toBe("OK");
  });

  test("入力例2: 等しい値を含む昇順の場合 (1, 1, 3)", () => {
    expect(knock(1, 1, 3)).toBe("OK");
  });

  test("入力例3: 昇順でない場合 (2, 1, 3)", () => {
    expect(knock(2, 1, 3)).toBe("NG");
  });

  test("全て同じ値の場合 (5, 5, 5)", () => {
    expect(knock(5, 5, 5)).toBe("OK");
  });

  test("負の数を含む昇順の場合 (-3, -2, -1)", () => {
    expect(knock(-3, -2, -1)).toBe("OK");
  });

  test("負の数を含む昇順でない場合 (-2, -3, -1)", () => {
    expect(knock(-2, -3, -1)).toBe("NG");
  });

  test("大きな数値の場合 (100, 200, 300)", () => {
    expect(knock(100, 200, 300)).toBe("OK");
  });
});
