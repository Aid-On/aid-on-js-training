import { TrainingSkipError } from "./common/TrainingSkipError.js";
// No. じゃんけん判定
// 2人のじゃんけん結果を受け取り、勝者と敗者を返すプログラムを作成せよ。
// 実行例:
//   $ node src/janken.js
//   入力: { name: "Alice", hand: "G" }, { name: "Bob", hand: "C" }
//   出力: { winner: "Alice", loser: "Bob" }
//
// [Tips]
// - グー (G) はチョキ (C) に勝ちます。
// - チョキ (C) はパー (P) に勝ちます。
// - パー (P) はグー (G) に勝ちます。
// - 同じ手の場合は引き分けとし、結果を空オブジェクト {} で返します。
//   例: return {};
//
// - 引数として受け取るプレイヤーのデータはオブジェクト形式です。
//   例: { name: "Alice", hand: "G" }
//   - `name` プロパティはプレイヤーの名前（文字列）
//   - `hand` プロパティはじゃんけんの手 ("G", "C", "P") を表します。
//
// - 返り値として返す勝敗結果もオブジェクト形式です。
//   例: { winner: "Alice", loser: "Bob" }
//   - `winner` プロパティには勝者の名前を
//   - `loser` プロパティには敗者の名前を入れます。
//
// [実装のヒント]
// 1. 条件分岐で勝敗を判定する
//    - プレイヤー1とプレイヤー2の `hand` を比較して、勝敗のパターンを決めます。
//    - 例: if (player1.hand === "G" && player2.hand === "C") { ... }
//
// 2. 引き分けの判定を先に行う
//    - もし両方のプレイヤーの `hand` が同じ場合は、結果を空オブジェクト {} として早めに返します。
//    - 例: if (player1.hand === player2.hand) { return {}; }
//
// 3. 結果オブジェクトを作成する
//    - 勝ったプレイヤーの `name` を `winner` に、負けたプレイヤーの `name` を `loser` に入れます。
//    - オブジェクトを作成して返します。
//    - 例: return { winner: player1.name, loser: player2.name };
//
// [注意点]
// - `hand` プロパティの値は "G", "C", "P" のいずれかのみであることを前提とします。
// - 万が一無効な値が渡された場合にエラーを出す必要がある場合は、適切なバリデーションを追加してください。
//
// [オブジェクト操作の例]
// - オブジェクトから値を取得するにはドット記法を使います。
//   例: player1.name は "Alice" を返します。
// - 新しいオブジェクトを作成するには `{}` を使います。
//   例: const result = { winner: "Alice", loser: "Bob" };
//
// @param {{ name: string, hand: "G" | "C" | "P" }} player1 - 1人目のプレイヤー
// @param {{ name: string, hand: "G" | "C" | "P" }} player2 - 2人目のプレイヤー
// @returns {{ winner: string, loser: string } | {} } 勝者と敗者、または引き分けの場合は空オブジェクト
export const janken = (
  player1 = { name: "kotorody", hand: "G" },
  player2 = { name: "atzurody", hand: "P" }
) => {
  // ---- ⬇︎⬇︎ ここから ⬇︎⬇︎ ----
  return { winner: player1.name, losser: player2.name };
  // ---- ⬆︎⬆︎ ここまで ⬆︎⬆︎ ----
};

console.log(
  janken({ name: "kotorody", hand: "G" }, { name: "atzurody", hand: "P" })
);
