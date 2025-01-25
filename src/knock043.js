import { TrainingSkipError } from "./common/TrainingSkipError.js";

// No. 43 2次方程式の解の判別
// 2次方程式 ax^2 + bx + c = 0 （x^2はxの2乗の意味）の係数a, b, cを入力し、
// 2次方程式の解が2つの実数解か、重解か、2つの虚数解かを判別するプログラムを作成せよ。
//
// 実行例:
// input a:
// 4
// input b:
// -7
// input c:
// 1
// 2つの実数解を持ちます
//
// input a:
// 1
// input b:
// 2
// input c:
// 1
// 重解を持ちます
//
// input a:
// 4
// input b:
// 0
// input c:
// 1
// 2つの虚数解を持ちます
//
// 判別式 D = b^2 - 4ac を使って判別する
// D > 0 なら2つの実数解
// D = 0 なら重解
// D < 0 なら2つの虚数解

/**
 * 2次方程式の解の種類を判別する関数
 * @param {number} a - 2次の係数
 * @param {number} b - 1次の係数
 * @param {number} c - 定数項
 * @returns {string} - "2つの実数解を持ちます" または "重解を持ちます" または "2つの虚数解を持ちます"
 * @throws {Error} - aが0の場合は "2次方程式ではありません" というエラーを投げる
 */
export const knock = (a = 4, b = -7, c = 1) => {
  throw new TrainingSkipError("未実装");
};
