import { TrainingSkipError } from "./common/TrainingSkipError.js";

// No. 50 foobar
// 1から100までの数を順番に出力するプログラムを作成せよ。
// ただし、以下の条件に従うこと：
// - 3の倍数のときは数の代わりに「foo」と出力する
// - 5の倍数のときは数の代わりに「bar」と出力する
// - 3と5の両方の倍数のときは数の代わりに「foobar」と出力する
//
// 実行例:
// 1
// 2
// foo
// 4
// bar
// foo
// 7
// 8
// foo
// bar
// 11
// foo
// 13
// 14
// foobar
// ...
//
// 注意:
// - 各数値は改行で区切る
// - 最後の数値の後にも改行を入れる

/**
 * 1から100までの数を条件に従って出力する関数
 * @returns {Array<string>} - 各要素が数値または"foo"/"bar"/"foobar"の文字列の配列
 */
export const knock = () => {
  throw new TrainingSkipError("未実装");
};
