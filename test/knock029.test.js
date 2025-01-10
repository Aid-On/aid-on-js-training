import { knock } from "../src/knock029.js";

describe("No. 29 5つの合計", () => {
  test("入力が [11, 22, 33, 44, 55] の場合", () => {
    const result = knock([11, 22, 33, 44, 55]);
    // 合計: 11 + 22 + 33 + 44 + 55 = 165
    expect(result).toBe(165);
  });

  test("入力が [1, 2, 3, 4, 5] の場合", () => {
    const result = knock([1, 2, 3, 4, 5]);
    // 合計: 1 + 2 + 3 + 4 + 5 = 15
    expect(result).toBe(15);
  });

  test("入力が全て負の値の場合: [-10, -20, -30, -40, -50]", () => {
    const result = knock([-10, -20, -30, -40, -50]);
    // 合計: -10 + -20 + -30 + -40 + -50 = -150
    expect(result).toBe(-150);
  });

  test("入力が全て0の場合: [0, 0, 0, 0, 0]", () => {
    const result = knock([0, 0, 0, 0, 0]);
    // 合計: 0
    expect(result).toBe(0);
  });

  test("入力が5つ未満の場合", () => {
    expect(() => knock([1, 2, 3])).toThrow(
      "入力値は5つの整数である必要があります"
    );
  });

  test("入力が5つを超える場合", () => {
    expect(() => knock([1, 2, 3, 4, 5, 6])).toThrow(
      "入力値は5つの整数である必要があります"
    );
  });
});
