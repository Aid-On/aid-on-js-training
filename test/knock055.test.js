import { knock } from "../src/knock055.js";

describe("No. 55 夢想花again", () => {
  test("入力例1: アスタリスクを5回繰り返す", () => {
    expect(knock("*", 5)).toBe("*****");
  });

  test("入力例2: プラス記号を3回繰り返す", () => {
    expect(knock("+", 3)).toBe("+++");
  });

  test("1回だけ繰り返す場合", () => {
    expect(knock("@", 1)).toBe("@");
  });

  test("数字を繰り返す場合", () => {
    expect(knock("7", 4)).toBe("7777");
  });

  test("日本語文字を繰り返す場合", () => {
    expect(knock("あ", 3)).toBe("あああ");
  });

  test("エラーケース: 空文字", () => {
    expect(() => knock("", 5)).toThrow("1文字を指定してください");
  });

  test("エラーケース: 複数文字", () => {
    expect(() => knock("abc", 3)).toThrow("1文字を指定してください");
  });

  test("エラーケース: 回数が0", () => {
    expect(() => knock("*", 0)).toThrow("正の整数を指定してください");
  });

  test("エラーケース: 回数が負の数", () => {
    expect(() => knock("*", -1)).toThrow("正の整数を指定してください");
  });

  test("特殊文字を繰り返す場合", () => {
    expect(knock("$", 2)).toBe("$$");
  });
});
