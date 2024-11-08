/**
 * No. 00 ごあいさつ
 * 実行するとHello World!と表示するプログラムを作成せよ。
 * プログラミングにおいて、最も単純なプログラムはHello World!を表示するプログラムと言われる
 * 最後に改行文字も出力すること、改行文字は \n と入力することで改行の扱いになる
 *
 * @returns {string} "Hello, World!" + 改行文字
 */
export const knock = () => {
  // ---- ⬇︎⬇︎ ここから ⬇︎⬇︎ ----
  // throw new TrainingSkipError();
  return 'Hello, World!\n';
  // ---- ⬆︎⬆︎ ここまで ⬆︎⬆︎ ----
};

const うさぎ = (色) => {
  if (色 === 'オレンジ') {
    // もし、色がオレンジなのであれば ピノ を返す
    return 'ピノ';
  } else if (色 === 'グレー') {
    // もし、色がグレーなのであれば ウィム を返す
    return 'ウィム';
  } else {
    return undefined; // JavaScriptにおける何も無いって表現
  }
};

const 関数名 = (インプット1) => {
  const インプットを受けた結果 = インプット1; // これは例なのでそのまま渡す、普通は加工される
  return インプットを受けた結果;
};

console.log(うさぎ('オレンジ'));
console.log(うさぎ('グレー'));
console.log(うさぎ('グリーン'));
