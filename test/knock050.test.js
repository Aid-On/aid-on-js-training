import { knock } from "../src/knock050.js";

describe("No. 50 foobar", () => {
  let result;

  beforeAll(() => {
    result = knock();
  });

  test("配列の長さが100である", () => {
    expect(result.length).toBe(100);
  });

  test("最初の15個の要素が正しい", () => {
    const expected = [
      "1", "2", "foo", "4", "bar",
      "foo", "7", "8", "foo", "bar",
      "11", "foo", "13", "14", "foobar"
    ];
    expect(result.slice(0, 15)).toEqual(expected);
  });

  test("3の倍数が'foo'になっている", () => {
    expect(result[2]).toBe("foo");   // 3
    expect(result[5]).toBe("foo");   // 6
    expect(result[8]).toBe("foo");   // 9
    expect(result[11]).toBe("foo");  // 12
  });

  test("5の倍数が'bar'になっている", () => {
    expect(result[4]).toBe("bar");   // 5
    expect(result[9]).toBe("bar");   // 10
    expect(result[19]).toBe("bar");  // 20
    expect(result[24]).toBe("bar");  // 25
  });

  test("15の倍数が'foobar'になっている", () => {
    expect(result[14]).toBe("foobar");  // 15
    expect(result[29]).toBe("foobar");  // 30
    expect(result[44]).toBe("foobar");  // 45
    expect(result[59]).toBe("foobar");  // 60
  });

  test("通常の数字が文字列として正しく出力される", () => {
    expect(result[0]).toBe("1");
    expect(result[1]).toBe("2");
    expect(result[3]).toBe("4");
    expect(result[6]).toBe("7");
  });

  test("最後の要素が正しい", () => {
    expect(result[99]).toBe("bar");  // 100は5の倍数
  });
});
