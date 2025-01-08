import { janken } from "../src/paizaD236.js";

describe("D236: じゃんけん判定", () => {
  test("Alice: G, Bob: C", () => {
    const result = janken(
      { name: "Alice", hand: "G" },
      { name: "Bob", hand: "C" }
    );
    expect(result).toEqual({ winner: "Alice", loser: "Bob" });
  });

  test("Alice: C, Bob: P", () => {
    const result = janken(
      { name: "Alice", hand: "C" },
      { name: "Bob", hand: "P" }
    );
    expect(result).toEqual({ winner: "Alice", loser: "Bob" });
  });

  test("Alice: P, Bob: G", () => {
    const result = janken(
      { name: "Alice", hand: "P" },
      { name: "Bob", hand: "G" }
    );
    expect(result).toEqual({ winner: "Alice", loser: "Bob" });
  });

  test("引き分け: G vs G", () => {
    const result = janken(
      { name: "Alice", hand: "G" },
      { name: "Bob", hand: "G" }
    );
    expect(result).toEqual({});
  });

  test("引き分け: C vs C", () => {
    const result = janken(
      { name: "Alice", hand: "C" },
      { name: "Bob", hand: "C" }
    );
    expect(result).toEqual({});
  });

  test("引き分け: P vs P", () => {
    const result = janken(
      { name: "Alice", hand: "P" },
      { name: "Bob", hand: "P" }
    );
    expect(result).toEqual({});
  });

  test("Bobが勝つ: G vs P", () => {
    const result = janken(
      { name: "Alice", hand: "G" },
      { name: "Bob", hand: "P" }
    );
    expect(result).toEqual({ winner: "Bob", loser: "Alice" });
  });

  test("Bobが勝つ: C vs G", () => {
    const result = janken(
      { name: "Alice", hand: "C" },
      { name: "Bob", hand: "G" }
    );
    expect(result).toEqual({ winner: "Bob", loser: "Alice" });
  });

  test("Bobが勝つ: P vs C", () => {
    const result = janken(
      { name: "Alice", hand: "P" },
      { name: "Bob", hand: "C" }
    );
    expect(result).toEqual({ winner: "Bob", loser: "Alice" });
  });
});
