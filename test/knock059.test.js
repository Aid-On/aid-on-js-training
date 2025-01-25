import { knock } from "../src/knock059.js";

describe("No. 59 行列の和", () => {
  test("入力例1: 同じ値になる行列の和", () => {
    const matrix1 = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    const matrix2 = [
      [9, 8, 7],
      [6, 5, 4],
      [3, 2, 1]
    ];
    const expected = [
      [10, 10, 10],
      [10, 10, 10],
      [10, 10, 10]
    ];
    expect(knock(matrix1, matrix2)).toEqual(expected);
  });

  test("入力例2: 単位行列との和", () => {
    const matrix1 = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8]
    ];
    const matrix2 = [
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1]
    ];
    const expected = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    expect(knock(matrix1, matrix2)).toEqual(expected);
  });

  test("零行列との和", () => {
    const matrix1 = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    const matrix2 = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ];
    expect(knock(matrix1, matrix2)).toEqual(matrix1);
  });

  test("負の数を含む行列の和", () => {
    const matrix1 = [
      [-1, -2, -3],
      [-4, -5, -6],
      [-7, -8, -9]
    ];
    const matrix2 = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    const expected = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ];
    expect(knock(matrix1, matrix2)).toEqual(expected);
  });

  test("エラーケース: 行列1の形式が不正（行数が足りない）", () => {
    const matrix1 = [
      [1, 2, 3],
      [4, 5, 6]
    ];
    const matrix2 = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    expect(() => knock(matrix1, matrix2)).toThrow("3×3の行列を入力してください");
  });

  test("エラーケース: 行列2の形式が不正（列数が足りない）", () => {
    const matrix1 = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    const matrix2 = [
      [1, 2],
      [4, 5],
      [7, 8]
    ];
    expect(() => knock(matrix1, matrix2)).toThrow("3×3の行列を入力してください");
  });

  test("エラーケース: 行列1の形式が不正（列数が不揃い）", () => {
    const matrix1 = [
      [1, 2, 3],
      [4, 5],
      [7, 8, 9]
    ];
    const matrix2 = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    expect(() => knock(matrix1, matrix2)).toThrow("3×3の行列を入力してください");
  });
});
