import { knock } from "../src/knock035.js";

describe("No. 35 配列要素の参照", () => {
  test("入力が0の場合: index = 0", () => {
    const result = knock(0);
    expect(result).toBe("array[0] = 3");
  });

  test("入力が5の場合: index = 5", () => {
    const result = knock(5);
    expect(result).toBe("array[5] = 1");
  });

  test("入力が9の場合: index = 9", () => {
    const result = knock(9);
    expect(result).toBe("array[9] = 2");
  });

  test("入力が3の場合: index = 3", () => {
    const result = knock(3);
    expect(result).toBe("array[3] = 8");
  });

  test("入力が7の場合: index = 7", () => {
    const result = knock(7);
    expect(result).toBe("array[7] = 6");
  });
});
