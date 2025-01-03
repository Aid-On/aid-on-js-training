import { TrainingSkipError } from "../src/common/TrainingSkipError.js";

// No. 10 絶対値
// 整数値を入力させ、その値を絶対値にして表示するプログラムを作成せよ。
// 実行例:
//   $ ./knock10
//   input number: 1
//   absolute value is 1
//   $ ./knock10
//   input number: -2
//   absolute value is 2
//
// [Tips]
// - 絶対値（abs）を求める方法：
//     1) if (num < 0) num = num * -1;  // 負の値なら-1を掛ける
//     2) あるいは num = Math.abs(num);

const absValue = (num) => {
  if (num < 0) num = num * -1;
  return num;
};

// @param {number} num
// @returns {string} "input number: num\nabsolute value is absValue"
export const knock = (num = 1) => {
  // ---- ⬇︎⬇︎ ここから ⬇︎⬇︎ ----
  const text = `input number: ${num}\nabsolute value is ${absValue(num)}`;
  return text;

  // ---- ⬆︎⬆︎ ここまで ⬆︎⬆︎ ----
};

// input number: -4\nabsolute value is 4
// input number: 3\nabsolute value is 3
// input number: -2\nabsolute value is 2
