// No. C144 じゃんけんの結果
// 過去のじゃんけんの記録を元に、アリスさんがボブさんに何回勝ったかを計算するプログラムを作成せよ。
// 実行例:
//   $ node src/paizaC144.js
//   入力:
//     6
//     G C
//     C G
//     P G
//     G C
//     P P
//     P C
//   出力:
//     3
// [入力形式]
// ・最初の行に、過去に行われたじゃんけんの回数 N (1 ≦ N ≦ 100) が与えられる。
// ・続く N 行のうちの i 行目 (1 ≦ i ≦ N) には、(i 回目のじゃんけんにおいてアリスさんが出した手)、(i 回目のじゃんけんにおいてボブさんが出した手) を表す文字列 A_i, B_i がこの順で半角スペース区切りで与えられる。
// ・じゃんけんの手は「グー」、「チョキ」、「パー」の 3 種類のみであり、それぞれ順番に 'G', 'C', 'P' というアルファベット 1 文字によって表現される。
//
// [Tips]
// - じゃんけんの勝敗ルール:
//     - G (グー) > C (チョキ)
//     - C (チョキ) > P (パー)
//     - P (パー) > G (グー)
// - 入力を配列で受け取る: const inputs = ['G C', 'C G', ...];
// - 勝利数をカウントする変数を初期化: let winCount = 0;
// - 各手を比較して勝利判定を実装する。
//
// [Tips]
// - じゃんけんの勝敗ルール:
//     - G (グー) > C (チョキ)
//     - C (チョキ) > P (パー)
//     - P (パー) > G (グー)
// - 入力を配列で受け取る: const inputs = ['G C', 'C G', ...];
// - 勝利数をカウントする変数を初期化: let winCount = 0;
// - 各手を比較して勝利判定を実装する。
// - `split` メソッドは文字列を指定した区切り文字で分割し、配列として返します。例えば、"G C".split(" ") は ["G", "C"] を返します。
// スプリットの使い方
// const AとB = "文字列".split(" "); // => ["A", "B"]
//
// @param {string[]} inputs - 過去のじゃんけん記録 (N行分の入力)
// @returns {number} アリスさんがボブさんに勝った回数
export const knock = (
  inputs = [
    3, // inputs[0] => じゃんけんする回数 （1から100までのどれか）
    "C C", // inputs[1] =>アリスはCなのでチョキ , ボブもCなのでチョキ -> あいこ
    "G C", // inputs[2] =>アリスはGなのでグー , ボブはCなのでチョキ -> アリスの勝ち
    "P G", // inputs[3] =>アリスはPなのでパー , ボブはGなのでグー -> アリスの勝ち
  ]
) => {
  // ---- ⬇︎⬇︎ ここから ⬇︎⬇︎ ----
  const jankenncount = inputs[0];
  var count = 0;
  for (var x = 1; x <= jankenncount; x++) {
    console.log(inputs[x]);
    const janken = inputs[x].split(" "); // => "C C" という文字列が入ってる
    const arisuHand = janken[0]; // => "G" ぐー "C" ちょき "P" パー
    const bobuHand = janken[1]; // => "G" ぐー "C" ちょき "P" パー
    console.log(janken, "アリス：", arisuHand, ", ボブ：", bobuHand);

    if (arisuHand === "G" && bobuHand === "C") {
      count += 1;
    } else if (arisuHand === "P" && bobuHand === "G") {
      count += 1;
    } else if (arisuHand === "C" && bobuHand === "P") {
      count += 1;
    }
  }

  return count;
  // ---- ⬆︎⬆︎ ここまで ⬆︎⬆︎ ----
};

console.log("アリスが勝った回数は、", knock([3, "C C", "G C", "C P"]), "です");
