import { knock } from "../src/knock036.js";

describe("No. 36 続・配列要素の参照", () => {
  test("入力が index1 = 3, index2 = 6 の場合", () => {
    const result = knock(3, 6);
    expect(result).toBe("8 * 9 = 72");
  });

  test("入力が index1 = 0, index2 = 1 の場合", () => {
    const result = knock(0, 1);
    expect(result).toBe("3 * 7 = 21");
  });

  test("入力が index1 = 2, index2 = 4 の場合", () => {
    const result = knock(2, 4);
    expect(result).toBe("0 * 4 = 0");
  });

  test("入力が index1 = 8, index2 = 9 の場合", () => {
    const result = knock(8, 9);
    expect(result).toBe("5 * 2 = 10");
  });

  test("入力が index1 = 5, index2 = 5 の場合", () => {
    const result = knock(5, 5);
    expect(result).toBe("1 * 1 = 1");
  });
});
