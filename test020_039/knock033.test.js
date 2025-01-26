import { knock } from "../src/knock033.js";

describe("No. 33 入力値抜き", () => {
  test("入力が7の場合: exclude = 7", () => {
    const result = knock(7);
    // 1から9までの数字で7を除いた配列
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 8, 9]);
  });

  test("入力が1の場合: exclude = 1", () => {
    const result = knock(1);
    // 1から9までの数字で1を除いた配列
    expect(result).toEqual([2, 3, 4, 5, 6, 7, 8, 9]);
  });

  test("入力が9の場合: exclude = 9", () => {
    const result = knock(9);
    // 1から9までの数字で9を除いた配列
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  test("入力が5の場合: exclude = 5", () => {
    const result = knock(5);
    // 1から9までの数字で5を除いた配列
    expect(result).toEqual([1, 2, 3, 4, 6, 7, 8, 9]);
  });

  test("入力が10の場合（範囲外）: exclude = 10", () => {
    const result = knock(10);
    // 10は範囲外なので1から9までのすべてを返す
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  test("入力が0の場合（範囲外）: exclude = 0", () => {
    const result = knock(0);
    // 0は範囲外なので1から9までのすべてを返す
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
