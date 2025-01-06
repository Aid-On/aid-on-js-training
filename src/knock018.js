/**
 * 配列の初期化と値の設定の練習
 *
 * 課題:
 * 1. 要素数10の配列を作成する
 * 2. 配列の全要素を指定された数値で初期化する
 * 3. 作成した配列を返す
 *
 * 期待される戻り値（numが6の場合）:
 * [6, 6, 6, 6, 6, 6, 6, 6, 6, 6]
 *
 * ヒント:
 * - 配列の作成方法:
 *   - const arr = new Array(10);  // 長さ10の空の配列
 *   - const arr = Array(10);      // 同上
 * - 配列の初期化方法:
 *   - arr.fill(num);              // 全要素をnumで初期化
 *   - Array(10).fill(num);        // 作成と初期化を一度に
 *   - new Array(10).fill(num);    // 同上
 *
 * @param {number} num - 配列を初期化する値（デフォルト値: 6）
 * @returns {number[]} 指定された値で初期化された10要素の配列
 */
export const knock = (num = 6) => {
  // ---- ⬇︎⬇︎ ここから ⬇︎⬇︎ ----
  throw TrainingSkipError("未実施");
  // ---- ⬆︎⬆︎ ここまで ⬆︎⬆︎ ----
};

console.log(knock(9));
