import { knock } from "../src/knock020.js";

describe("No. 20", () => {
  test("入力例1: value1 = 10, value2 = 3", () => {
    const result = knock(10, 3);
    // 割り算の結果: 10 ÷ 3 = 3（切り捨て）
    // 掛け算の結果: 3 × 3 = 9
    expect(result).toEqual([3, 9]);
  });

  test("割り算が割り切れるケース: value1 = 8, value2 = 2", () => {
    const result = knock(8, 2);
    // 割り算の結果: 8 ÷ 2 = 4
    // 掛け算の結果: 4 × 2 = 8
    expect(result).toEqual([4, 8]);
  });

  test("2つ目の値が0の場合: value1 = 10, value2 = 0", () => {
    expect(() => knock(10, 0)).toThrow(
      "2つ目の値が0のため、割り算はできません"
    );
  });

  test("負の値を含むケース: value1 = -15, value2 = 4", () => {
    const result = knock(-15, 4);
    // 割り算の結果: -15 ÷ 4 = -3（切り捨て）
    // 掛け算の結果: -3 × 4 = -12
    expect(result).toEqual([-3, -12]);
  });

  test("大きな値を扱うケース: value1 = 1000000, value2 = 123", () => {
    const result = knock(1000000, 123);
    // 割り算の結果: 1000000 ÷ 123 = 8130（切り捨て）
    // 掛け算の結果: 8130 × 123 = 999990
    expect(result).toEqual([8130, 999990]);
  });
});
