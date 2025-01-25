import { knock } from "../src/knock057.js";

describe("No. 57 テスト集計", () => {
  test("入力例1: 複数の異なる点数", () => {
    const result = knock([80, 65, 90, 75, 85]);
    expect(result).toEqual({
      total: 395,
      average: "79.0",
      max: 90,
      min: 65
    });
  });

  test("入力例2: 全て同じ点数", () => {
    const result = knock([100, 100, 100]);
    expect(result).toEqual({
      total: 300,
      average: "100.0",
      max: 100,
      min: 100
    });
  });

  test("1つの点数のみ", () => {
    const result = knock([85]);
    expect(result).toEqual({
      total: 85,
      average: "85.0",
      max: 85,
      min: 85
    });
  });

  test("小数点以下の四捨五入", () => {
    const result = knock([81, 82, 83]);
    expect(result).toEqual({
      total: 246,
      average: "82.0",
      max: 83,
      min: 81
    });
  });

  test("エラーケース: 空配列", () => {
    expect(() => knock([])).toThrow("点数が入力されていません");
  });

  test("エラーケース: 範囲外の点数（負の数）", () => {
    expect(() => knock([80, -5, 90])).toThrow(
      "点数は0以上100以下の整数で入力してください"
    );
  });

  test("エラーケース: 範囲外の点数（100超）", () => {
    expect(() => knock([80, 101, 90])).toThrow(
      "点数は0以上100以下の整数で入力してください"
    );
  });

  test("境界値: 0点と100点を含む", () => {
    const result = knock([0, 50, 100]);
    expect(result).toEqual({
      total: 150,
      average: "50.0",
      max: 100,
      min: 0
    });
  });
});
