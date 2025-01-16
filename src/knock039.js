import { TrainingSkipError } from "./common/TrainingSkipError.js";
// No. 39 もっと・配列要素の参照
// {3, 7, 0, 8, 4, 1, 9, 6, 5, 2} で初期化される大きさ10の整数型配列を宣言し、
// 次の手順で計算を行い、結果を表示します:
// 1. 参照する要素番号の配列要素の値から次の要素番号の配列要素の値を引いた結果を表示。
// 2. 参照する要素番号を1増やす。
// これを9回繰り返します。

// 実行例:
//   出力:
//     -4
//     7
//     -8
//     4
//     3
//     -8
//     3
//     1
//     3

// 【Tips】
// - 配列の要素を順に操作し、隣接する要素の値を比較する処理です。
// - 参照する要素番号が配列の最後の要素に達しないようにするには、ループを配列のサイズ-1で止めます。
// - 配列要素の引き算を行い、結果を配列やコンソールに表示する方法を学びます。

/**
 * 配列要素の隣接する値を引き算し、結果を計算する関数
 * @returns {Array<number>} - 計算結果を格納した配列
 */
export const knock = () => {
  // 配列の初期化
  const array = [3, 7, 0, 8, 4, 1, 9, 6, 5, 2];

  // 結果を格納する配列
  const result = [];

  // 配列の要素を順に計算（9回繰り返す）
  for (let i = 0; i < array.length - 1; i++) {
    // 現在の要素の値 - 次の要素の値
    const difference = array[i] - array[i + 1];

    // 結果を格納
    result.push(difference);
  }

  // 結果を返す
  return result;
};
