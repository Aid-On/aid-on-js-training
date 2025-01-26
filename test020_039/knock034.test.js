import { knock } from "../src/knock034.js";

describe("No. 34 入力値抜き改", () => {
  test("入力が7の場合: exclude = 7", () => {
    const result = knock(7);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 9]);
  });

  test("入力が1の場合: exclude = 1", () => {
    const result = knock(1);
    expect(result).toEqual([3, 4, 5, 6, 7, 8, 9]);
  });

  test("入力が9の場合: exclude = 9", () => {
    const result = knock(9);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  test("入力が5の場合: exclude = 5", () => {
    const result = knock(5);
    expect(result).toEqual([1, 2, 3, 4, 7, 8, 9]);
  });

  test("入力が0の場合（範囲外）: exclude = 0", () => {
    const result = knock(0);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  test("入力が10の場合（範囲外）: exclude = 10", () => {
    const result = knock(10);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
