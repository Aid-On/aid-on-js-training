import { knock } from "../src/paizaD235.js";

describe("D235: 5人兄弟の体重計算", () => {
  test("入力例1: 50", () => {
    const result = knock(50);
    expect(result).toBe(250);
  });

  test("入力例2: 11", () => {
    const result = knock(11);
    expect(result).toBe(55);
  });

  test("最小値: 1", () => {
    const result = knock(1);
    expect(result).toBe(5);
  });

  test("最大値: 150", () => {
    const result = knock(150);
    expect(result).toBe(750);
  });

  test("中間値: 100", () => {
    const result = knock(100);
    expect(result).toBe(500);
  });

  test("小さい値: 10", () => {
    const result = knock(10);
    expect(result).toBe(50);
  });

  test("偶数の値: 20", () => {
    const result = knock(20);
    expect(result).toBe(100);
  });

  test("奇数の値: 25", () => {
    const result = knock(25);
    expect(result).toBe(125);
  });

  test("端数がない整数: 75", () => {
    const result = knock(75);
    expect(result).toBe(375);
  });

  test("最小限の入力値: 5", () => {
    const result = knock(5);
    expect(result).toBe(25);
  });
});
