import { knock } from "../src/knock037.js";

describe("No. 37 続々・配列要素の参照", () => {
  test("入力が8の場合: index = 8", () => {
    const result = knock(8);
    // 配列の値:
    // array[8] = 5, array[5] = 1
    expect(result).toBe("value = 1");
  });

  test("入力が0の場合: index = 0", () => {
    const result = knock(0);
    // 配列の値:
    // array[0] = 3, array[3] = 8
    expect(result).toBe("value = 8");
  });

  test("入力が1の場合: index = 1", () => {
    const result = knock(1);
    // 配列の値:
    // array[1] = 7, array[7] = 6
    expect(result).toBe("value = 6");
  });

  test("入力が9の場合: index = 9", () => {
    const result = knock(9);
    // 配列の値:
    // array[9] = 2, array[2] = 0
    expect(result).toBe("value = 0");
  });

  test("入力が4の場合: index = 4", () => {
    const result = knock(4);
    // 配列の値:
    // array[4] = 4, array[4] = 4
    expect(result).toBe("value = 4");
  });
});
