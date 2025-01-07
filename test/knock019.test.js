import { knock } from "../src/knock019.js";

describe("No. 19", () => {
  test("デフォルト値の配列の各要素が2倍になる", () => {
    const result = knock();
    expect(result).toBeDefined(); // 結果が未定義でないことを確認
    expect(Array.isArray(result)).toBe(true); // 配列であることを確認
    expect(result).toHaveLength(5); // 要素数を確認
    expect(result).toEqual([8, 12, 14, 6, 2]); // 正しい結果を確認
  });

  test("指定した値の配列の各要素が2倍になる", () => {
    const inputs = [9, 8, 7, 6, 5];
    const result = knock(inputs);
    expect(result).toBeDefined(); // 結果が未定義でないことを確認
    expect(result).toHaveLength(5);
    expect(result).toEqual([18, 16, 14, 12, 10]);
    expect(inputs).toEqual([9, 8, 7, 6, 5]); // 元の配列が変更されていないことを確認
  });

  test("0を含む配列の処理", () => {
    const result = knock([1, 0, 3, 0, 5]);
    expect(result).toBeDefined(); // 結果が未定義でないことを確認
    expect(result).toEqual([2, 0, 6, 0, 10]);
  });
});
