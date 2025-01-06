import { knock } from "../src/knock017.js";

describe("No. 17", () => {
  test("0から9までの数値が格納された配列が返される", () => {
    const result = knock();

    // 配列が返されることを確認
    expect(Array.isArray(result)).toBe(true);

    // 要素数が10であることを確認
    expect(result).toHaveLength(10);

    // 各要素が期待される値と一致することを確認
    result.forEach((value, index) => {
      expect(value).toBe(index);
    });

    // 要素が数値型であることを確認
    result.forEach((value) => {
      expect(typeof value).toBe("number");
    });
  });
});
