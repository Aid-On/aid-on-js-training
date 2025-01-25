import { knock } from "../src/knock047.js";

describe("No. 47 値の入れ替え", () => {
  test("入力例: 5と8の入れ替え", () => {
    expect(knock(5, 8)).toEqual([
      "first number = 8",
      "second number = 5"
    ]);
  });

  test("同じ値の入れ替え (3, 3)", () => {
    expect(knock(3, 3)).toEqual([
      "first number = 3",
      "second number = 3"
    ]);
  });

  test("負の数を含む入れ替え (-5, 10)", () => {
    expect(knock(-5, 10)).toEqual([
      "first number = 10",
      "second number = -5"
    ]);
  });

  test("両方負の数の入れ替え (-8, -3)", () => {
    expect(knock(-8, -3)).toEqual([
      "first number = -3",
      "second number = -8"
    ]);
  });

  test("0を含む入れ替え (0, 100)", () => {
    expect(knock(0, 100)).toEqual([
      "first number = 100",
      "second number = 0"
    ]);
  });

  test("大きな数値の入れ替え (1000, 9999)", () => {
    expect(knock(1000, 9999)).toEqual([
      "first number = 9999",
      "second number = 1000"
    ]);
  });
});
