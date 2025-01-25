import { knock } from "../src/knock058.js";

describe("No. 58 棒グラフ", () => {
  test("入力例1: 異なる長さの棒グラフ", () => {
    const result = knock([10, 5, 3, 8, 1]);
    const expected = 
      "10: **********\n" +
      " 5: *****\n" +
      " 3: ***\n" +
      " 8: ********\n" +
      " 1: *";
    expect(result).toBe(expected);
  });

  test("入力例2: 同じ長さの棒グラフ", () => {
    const result = knock([3, 3, 3, 3, 3]);
    const expected = 
      " 3: ***\n" +
      " 3: ***\n" +
      " 3: ***\n" +
      " 3: ***\n" +
      " 3: ***";
    expect(result).toBe(expected);
  });

  test("0を含む入力", () => {
    const result = knock([4, 0, 2, 1, 3]);
    const expected = 
      " 4: ****\n" +
      " 0: \n" +
      " 2: **\n" +
      " 1: *\n" +
      " 3: ***";
    expect(result).toBe(expected);
  });

  test("2桁の数値を含む入力", () => {
    const result = knock([15, 5, 20, 8, 12]);
    const expected = 
      "15: ***************\n" +
      " 5: *****\n" +
      "20: ********************\n" +
      " 8: ********\n" +
      "12: ************";
    expect(result).toBe(expected);
  });

  test("エラーケース: 配列の長さが5未満", () => {
    expect(() => knock([1, 2, 3, 4])).toThrow("5つの数値を入力してください");
  });

  test("エラーケース: 配列の長さが5超過", () => {
    expect(() => knock([1, 2, 3, 4, 5, 6])).toThrow("5つの数値を入力してください");
  });

  test("エラーケース: 負の数を含む", () => {
    expect(() => knock([1, -2, 3, 4, 5])).toThrow("0以上の整数を入力してください");
  });

  test("全て0の入力", () => {
    const result = knock([0, 0, 0, 0, 0]);
    const expected = 
      " 0: \n" +
      " 0: \n" +
      " 0: \n" +
      " 0: \n" +
      " 0: ";
    expect(result).toBe(expected);
  });
});
