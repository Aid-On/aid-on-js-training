import { TrainingSkipError } from "../common/TrainingSkipError.js";

// No. 16 0でおしまい
// 整数値を入力させ、入力値が0でなければ再度入力させ、0であれば終了するプログラムを作成せよ。
// 実行例:
//   $ ./knock16
//   input number: 5
//   input number: 3
//   input number: -4
//   input number: 0
//
// [Tips]
// - 一般的には while や do-while などのループを用いて「0が入力されるまで繰り返し読み込む」という処理を実装する
// - このトレーニングでは、関数の引数として「入力値の配列」を受け取り、0 が出るまで繰り返す想定にしている
//   例）knock([5, 3, -4, 0]) → "input number: 5\ninput number: 3\ninput number: -4\ninput number: 0\n"
//
// @param {number[]} inputs - 整数値の配列。0が出てくるまで繰り返し、0が出たら終了
// @returns {string} "input number: x\n..." が 0 に出会うまで繰り返される
export const knock = (inputs = [5, 3, -4, 0]) => {
  // ---- ⬇︎⬇︎ ここから ⬇︎⬇︎ ----
  return TrainingSkipError("未実装");
  // ---- ⬆︎⬆︎ ここまで ⬆︎⬆︎ ----
};

/*
[期待結果]
input number: 5
input number: 3
input number: -4
input number: 0
*/

const question1 = () => {
  const numbers = [4, 5, 6];
};

// [起きてる問題]
// ✅ 問題にない数字が入ってる
// 回答してるテキストの行数が全部１つ
// input number: 0 が含まれてない

// 比較演算子
// A < B    AはB未満
// A <= B   AはB以下
// A > B    AはB超過
// A >= B   AはB以上
// A === B  AとBが同じ
// A !== B  AとBは違う

/*
あってる部分
    "input number: 5",
    "input number: 3",
    "input number: -4",
期待結果と違う部分
-   "input number: 0",
*/

console.log(knock([1, 2, 3, 0]));
// console.log(knock([4, 8, 7, 2, 0]));

// node src/knock016.js

// ヒント1
// inputsが次だとしたら [4, 5, 7, 0, 1, 2, 3]
//
// input number: 4
// input number: 5
// input number: 7
// input number: 0

// ヒント2
// whileループで何がくるか分からない配列を見ていくとき
// inputsの最初から最後までを全部見ようとする
//
// var index = 0
// while(inputs[index] !== ？) {
//   // やりたいこと
//   index++;
