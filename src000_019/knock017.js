/**
 * 配列の初期化と操作の練習
 *
 * 課題:
 * 1. 要素数10の配列を作成する
 * 2. 配列のインデックスiの位置に値iを代入する（0から9まで）
 * 3. 作成した配列を返す
 *
 * 期待される戻り値:
 * [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
 *
 * [Tips]
 * - 配列の作成方法:
 *   - const arr = new Array(10);  // 長さ10の空の配列
 *   - const arr = [];             // 空の配列
 * - 配列への値の代入: arr[i] = i;
 *
 * @returns {number[]} 0から9までの数値が順番に格納された配列
 */
export const knock = () => {
  // ---- ⬇︎⬇︎ ここから ⬇︎⬇︎ ----
  const arr = [];
  for (var x = 0; x < 10; x++) {
    arr[x] = x;
  }

  return arr;

  // ---- ⬆︎⬆︎ ここまで ⬆︎⬆︎ ----
};

const arraySample = () => {
  const bag = [];
  const oak = "オークの原木";
  const oakPlanks = "オークの板材";
  bag[0] = oak;
  bag.push("豚肉");
  bag[0] = oakPlanks;
  return bag;
};

const arraySample2 = () => {
  const droppedItems = [
    "銅の原石",
    "石炭",
    "銅の原石",
    "銅の原石",
    "銅の原石",
    "銅の原石",
    "金の原石",
    "銅の原石",
    "銅の原石",
    "銅の原石",
    "銅の原石",
    "ダイヤモンドの原石",
    "銅の原石",
    "銅の原石",
    "銅の原石",
  ];
  console.log(`落ちてるアイテムの数は${droppedItems.length}個です`);
  const bag = [];
  for (var x = 0; x < droppedItems.length; x++) {
    if (droppedItems[x] !== "銅の原石") {
      // bag[x] = droppedItems[x];
      bag.push(droppedItems[x]);
    }
  }
  return bag; // => ["石炭", "金の原石", "ダイヤモンドの原石"]
};

// => [] / [[]]

console.log(arraySample2());

// 配列.push(追加したい要素)

const arr = [];
const arr2 = new Array();

const obj = {};

class Dog {
  name = "ポチ";

  足の数() {
    return 4;
  }
}

const 犬 = Dog();
犬.足の数; // => 4

// ----

/*
(HTML)
<div class="dog"></div>

(CSS)
.dog {
  background-color: brown;
}
*/
