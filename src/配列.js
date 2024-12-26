const main = () => {
  // 1 空っぽの配列の作り方
  // JavaScriptの配列 Array
  // Arrayリテラル []
  const array1 = [];
  console.log(array1);
  // // Array = オブジェクト
  // const array2 = new Array();
  // console.log(array2);

  // 指定した配列の数字の場所にアイテムを追加したい
  // 配列[指定する数字] = 入れたいアイテム
  // 配列の各要素の数え方として、0番目、1番目と数える
  array1[0] = 12;
  console.log(array1);

  // 配列の中の指定した数字番目のアイテムを取得したい
  // 配列[指定する数字] // => 欲しかった数字番目のアイテム
  console.log(array1[0]);

  const 持ち武器 = [];
  console.log("持ち武器", 持ち武器);
  持ち武器[0] = "リッター";
  console.log("持ち武器", 持ち武器);
  console.log(持ち武器[0]);
  // 配列の数を取得する際
  // const array = [1, 2, 3]
  // arrayの数をとるには array.length // => 3
  console.log(`atzurodyの持ち武器は${持ち武器.length}つです`);
};

function main2() {}

main();
