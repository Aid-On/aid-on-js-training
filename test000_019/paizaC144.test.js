import { knock } from "../src000_019/paizaC144.js";

describe("C144: じゃんけんの結果", () => {
  test("入力例1: アリス勝利3回", () => {
    const inputs = ["6", "G C", "C G", "P G", "G C", "P P", "P C"];
    const result = knock(inputs);
    expect(result).toBe(3);
  });

  test("入力例2: アリス勝利4回", () => {
    const inputs = [
      "8",
      "G C",
      "P C",
      "C G",
      "G C",
      "G P",
      "P G",
      "C C",
      "C P",
    ];
    const result = knock(inputs);
    expect(result).toBe(4);
  });

  test("アリス全勝: N=3", () => {
    const inputs = ["3", "G C", "C P", "P G"];
    const result = knock(inputs);
    expect(result).toBe(3);
  });

  test("アリス全敗: N=3", () => {
    const inputs = ["3", "C G", "P C", "G P"];
    const result = knock(inputs);
    expect(result).toBe(0);
  });

  test("全て引き分け: N=3", () => {
    const inputs = ["3", "G G", "C C", "P P"];
    const result = knock(inputs);
    expect(result).toBe(0);
  });

  test("N=1: アリス勝利", () => {
    const inputs = ["1", "G C"];
    const result = knock(inputs);
    expect(result).toBe(1);
  });

  test("N=1: アリス敗北", () => {
    const inputs = ["1", "C G"];
    const result = knock(inputs);
    expect(result).toBe(0);
  });

  test("N=100: アリス50勝", () => {
    const inputs = [
      "100",
      ...Array(50).fill("G C"), // アリス勝利50回
      ...Array(50).fill("C G"), // アリス敗北50回
    ];
    const result = knock(inputs);
    expect(result).toBe(50);
  });
});
