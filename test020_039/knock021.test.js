import { knock } from "../src/knock021.js";

describe("No. 21", () => {
  test("入力例1: str = 'abc', count = 3", () => {
    const result = knock("abc", 3);
    // 繰り返し結果: "abcabcabc"
    expect(result).toBe("abcabcabc");
  });

  test("繰り返し回数が0の場合: str = 'abc', count = 0", () => {
    const result = knock("abc", 0);
    // 繰り返し結果: ""
    expect(result).toBe("");
  });

  test("繰り返し回数が負の場合: str = 'abc', count = -1", () => {
    const result = knock("abc", -1);
    // 繰り返し結果: ""
    expect(result).toBe("");
  });

  test("文字列が空の場合: str = '', count = 5", () => {
    const result = knock("", 5);
    // 繰り返し結果: ""
    expect(result).toBe("");
  });

  test("大きな回数を繰り返す場合: str = 'a', count = 1000", () => {
    const result = knock("a", 1000);
    // 繰り返し結果: "a" が1000個連結
    expect(result).toBe("a".repeat(1000));
  });

  test("特殊文字を含む場合: str = 'a\n', count = 2", () => {
    const result = knock("a\n", 2);
    // 繰り返し結果: "a\na\n"
    expect(result).toBe("a\na\n");
  });
});
