/**
 * 配列要素の変換練習
 *
 * 課題:
 * 1. 要素数5の新しい配列を作成する
 * 2. 入力配列の各要素を2倍にした値を、新しい配列に代入する
 * 3. 完成した配列を返す
 *
 *
 * 入力例: [4, 6, 7, 3, 1]
 * 期待される戻り値: [8, 12, 14, 6, 2]
 *
 * ヒント:
 * - 新しい配列の作成: const arr = new Array(5);
 * - ループ内での計算と代入: arr[i] = inputs[i] * 2;
 *
 * 配列に length というフィールドが用意されていて
 * arr.length // -> 配列の中のアイテムの個数
 *
 * array[0] -> 1番目の要素が取れる 4
 * array[1] -> 2番目の要素が取れる 6
 * array[2] -> 3番目の要素が取れる 7
 *
 * @param {number[]} inputs - 元の5つの数値の配列（デフォルト: [4, 6, 7, 3, 1]）
 * @returns {number[]} 各要素を2倍にした新しい配列
 */
export const knock = (inputs = [4, 6, 7, 3, 1]) => {
  // ---- ⬇︎⬇︎ ここから ⬇︎⬇︎ ----
<<<<<<< Updated upstream
  const arr = [];
  for (var x = 0; x < inputs.length; x++) {
    arr[x] = inputs[x] * 2;
  }
  return arr;
=======
  throw new TrainingSkipError("未実装");
>>>>>>> Stashed changes
  // ---- ⬆︎⬆︎ ここまで ⬆︎⬆︎ ----
};

// 4, 6, 7, 3, 1 だとしたら
// 8, 13, 14, 6, 2 を期待してる
