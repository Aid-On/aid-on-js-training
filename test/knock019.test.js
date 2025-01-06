import { knock } from "../src/knock019.js";

describe("No. 19", () => {
  test("デフォルト値の配列の各要素が2倍になる", () => {
    const result = knock();

    // 配列が返されることを確認
    expect(Array.isArray(result)).toBe(true);

    // 要素数が5であることを確認
    expect(result).toHaveLength(5);

    // 各要素が2倍になっていることを確認
    expect(result).toEqual([8, 12, 14, 6, 2]);

    // すべての要素が数値型であることを確認
    result.forEach((value) => {
      expect(typeof value).toBe("number");
    });
  });

  test("指定した値の配列の各要素が2倍になる", () => {
    const inputs = [9, 8, 7, 6, 5];
    const result = knock(inputs);

    expect(result).toHaveLength(5);
    expect(result).toEqual([18, 16, 14, 12, 10]);

    // 入力配列が変更されていないことを確認
    expect(inputs).toEqual([9, 8, 7, 6, 5]);
  });

  test("配列のコピーメソッドを使用していないことを確認", () => {
    const functionString = knock.toString();
    expect(functionString).not.toContain("Array.from");
    expect(functionString).not.toContain("slice");
    expect(functionString).not.toContain("...");
    expect(functionString).not.toContain(".map");
    expect(functionString).not.toContain(".forEach");
  });

  test("0を含む配列の処理", () => {
    const result = knock([1, 0, 3, 0, 5]);
    expect(result).toEqual([2, 0, 6, 0, 10]);
  });
});
