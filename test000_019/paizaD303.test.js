import { knock } from "../src000_019/paizaD303.js";

describe("D303: 1日の降水量", () => {
  test("入力例1: 50", () => {
    const result = knock(50);
    expect(result).toBe(1200);
  });

  test("入力例2: 0", () => {
    const result = knock(0);
    expect(result).toBe(0);
  });

  test("最大値: 200", () => {
    const result = knock(200);
    expect(result).toBe(4800);
  });

  test("最小値: 0", () => {
    const result = knock(0);
    expect(result).toBe(0);
  });

  test("中間値: 100", () => {
    const result = knock(100);
    expect(result).toBe(2400);
  });

  test("小さい値: 1", () => {
    const result = knock(1);
    expect(result).toBe(24);
  });

  test("小さい値: 10", () => {
    const result = knock(10);
    expect(result).toBe(240);
  });

  test("偶数の値: 20", () => {
    const result = knock(20);
    expect(result).toBe(480);
  });

  test("奇数の値: 25", () => {
    const result = knock(25);
    expect(result).toBe(600);
  });

  test("端数がない整数: 150", () => {
    const result = knock(150);
    expect(result).toBe(3600);
  });
});
