import { knock } from "../src/knock051.js";

describe("No. 51 お支払い", () => {
  test("入力例: 54321円", () => {
    const expected = [
      "10000円: 5枚",
      "5000円: 0枚",
      "1000円: 4枚",
      "500円: 0枚",
      "100円: 3枚",
      "50円: 0枚",
      "10円: 2枚",
      "5円: 0枚",
      "1円: 1枚"
    ];
    expect(knock(54321)).toEqual(expected);
  });

  test("全ての紙幣・硬貨を使用する金額: 16666円", () => {
    const expected = [
      "10000円: 1枚",
      "5000円: 1枚",
      "1000円: 1枚",
      "500円: 1枚",
      "100円: 1枚",
      "50円: 1枚",
      "10円: 1枚",
      "5円: 1枚",
      "1円: 1枚"
    ];
    expect(knock(16666)).toEqual(expected);
  });

  test("小額: 123円", () => {
    const expected = [
      "10000円: 0枚",
      "5000円: 0枚",
      "1000円: 0枚",
      "500円: 0枚",
      "100円: 1枚",
      "50円: 0枚",
      "10円: 2枚",
      "5円: 0枚",
      "1円: 3枚"
    ];
    expect(knock(123)).toEqual(expected);
  });

  test("大額: 99999円", () => {
    const expected = [
      "10000円: 9枚",
      "5000円: 1枚",
      "1000円: 4枚",
      "500円: 1枚",
      "100円: 4枚",
      "50円: 1枚",
      "10円: 4枚",
      "5円: 1枚",
      "1円: 4枚"
    ];
    expect(knock(99999)).toEqual(expected);
  });

  test("エラーケース: 0円", () => {
    expect(() => knock(0)).toThrow("金額は0より大きい値を入力してください");
  });

  test("エラーケース: 負の金額", () => {
    expect(() => knock(-1000)).toThrow("金額は0より大きい値を入力してください");
  });
});
