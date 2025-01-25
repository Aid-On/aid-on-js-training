import { knock } from "../src/knock045.js";

describe("No. 45 タクシー料金", () => {
  test("入力例1: 初乗り料金を超える距離 (2.4km)", () => {
    expect(knock(2.4)).toBe("850 yen");
  });

  test("入力例2: 初乗り料金ちょうどの距離 (1.7km)", () => {
    expect(knock(1.7)).toBe("610 yen");
  });

  test("入力例3: より長い距離 (3.5km)", () => {
    expect(knock(3.5)).toBe("1170 yen");
  });

  test("初乗り料金未満の距離 (1.0km)", () => {
    expect(knock(1.0)).toBe("610 yen");
  });

  test("境界値: 1.701kmの場合（初乗り距離を少し超える）", () => {
    expect(knock(1.701)).toBe("690 yen");
  });

  test("長距離の場合 (10.0km)", () => {
    // 1.7kmまでが610円
    // 残り8.3kmを313mで割ると約26.5回 → 27回の加算
    // 610 + (27 * 80) = 2770円
    expect(knock(10.0)).toBe("2770 yen");
  });

  test("エラーケース: 距離が0以下", () => {
    expect(() => knock(0)).toThrow("距離は0より大きい値を入力してください");
    expect(() => knock(-1)).toThrow("距離は0より大きい値を入力してください");
  });
});
