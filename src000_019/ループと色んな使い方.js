// 1. 文字列の連結
function stringExample() {
  // 文字列を徐々に作っていく例
  let text = ""; // 空の文字列から開始

  for (let i = 0; i < 10; i++) {
    text += "Hello"; // ループのたびに "Hello" を追加
    console.log(`${i}回目: ${text}`); // 途中経過を確認
  }

  return text;
  // 実行結果:
  // 0回目: Hello
  // 1回目: HelloHello
  // 2回目: HelloHelloHello
  // ...と続く
}

// 2. 数値の累積
function numberExample() {
  // 数値を徐々に足していく例
  let count = 0; // 0から開始

  for (let i = 0; i < 10; i++) {
    count += i; // ループ回数を足していく
    console.log(`${i}回目: 現在の合計は${count}`); // 途中経過を確認
  }

  return count;
  // 実行結果:
  // 0回目: 現在の合計は0
  // 1回目: 現在の合計は1
  // 2回目: 現在の合計は3
  // ...と続く
}

// 3. 配列の操作
function arrayExample() {
  // 配列に要素を追加していく例
  let items = []; // 空の配列から開始

  for (let i = 0; i < 10; i++) {
    items[i] = i; // i番目の位置にiを格納
    console.log(`${i}回目: ${JSON.stringify(items)}`); // 途中経過を確認
  }

  return items;
  // 実行結果:
  // 0回目: [0]
  // 1回目: [0, 1]
  // 2回目: [0, 1, 2]
  // ...と続く
}

// それぞれの例を実行
console.log("文字列の例:");
stringExample();

console.log("\n数値の例:");
numberExample();

console.log("\n配列の例:");
arrayExample();
