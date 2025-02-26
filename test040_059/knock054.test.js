import { knock } from "../src040_059/knock054.js";

describe("No. 54 最大最小", () => {
  test("入力例1: 複数の異なる値を含む配列", () => {
    expect(knock([10, -5, 8, 3, 2, 7])).toEqual(["最大値: 10", "最小値: -5"]);
  });

  test("入力例2: すべての要素が同じ値", () => {
    expect(knock([1, 1, 1, 1])).toEqual(["最大値: 1", "最小値: 1"]);
  });

  test("1要素の配列", () => {
    expect(knock([42])).toEqual(["最大値: 42", "最小値: 42"]);
  });

  test("負の数のみの配列", () => {
    expect(knock([-10, -5, -8, -3])).toEqual(["最大値: -3", "最小値: -10"]);
  });

  test("大きな数値を含む配列", () => {
    expect(knock([1000, 1, 500, 2000, -1000])).toEqual([
      "最大値: 2000",
      "最小値: -1000",
    ]);
  });

  test("エラーケース: 空配列", () => {
    expect(() => knock([])).toThrow("配列が空です");
  });

  test("最大値と最小値が同じ位置にある配列", () => {
    expect(knock([5, 3, 1, 10, -2, -2])).toEqual(["最大値: 10", "最小値: -2"]);
  });

  test("ゼロを含む配列", () => {
    expect(knock([0, 5, -5, 0, 3])).toEqual(["最大値: 5", "最小値: -5"]);
  });
});
