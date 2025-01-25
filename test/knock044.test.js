import { knock } from "../src/knock044.js";

describe("No. 44 通貨換算", () => {
  test("入力例1: 10000円", () => {
    expect(knock(10000)).toBe("90.91 dollars");
  });

  test("入力例2: 5500円", () => {
    expect(knock(5500)).toBe("50.00 dollars");
  });

  test("入力例3: 123円", () => {
    expect(knock(123)).toBe("1.12 dollars");
  });

  test("0円の場合", () => {
    expect(knock(0)).toBe("0.00 dollars");
  });

  test("1円の場合（小数点以下の桁数確認）", () => {
    expect(knock(1)).toBe("0.01 dollars");
  });

  test("大きな金額の場合 (1000000円)", () => {
    expect(knock(1000000)).toBe("9090.91 dollars");
  });

  test("110円の場合（ちょうど1ドル）", () => {
    expect(knock(110)).toBe("1.00 dollars");
  });
});
