const countup = () => {
  for (var x = 0; x <= 10; x += 2) {
    // console.log(x);
  }
};
countup();

// ランダムな数 (1から6)
const rollDice = () => {
  const 最低値 = 1;
  const 最高値 = 6;
  return Math.floor(Math.random() * 最高値) + 最低値; // 1から6の数字を返す
};

// マイクラでいうtpを使うときは /tp
// プログラムで関数tpを呼ぶときは tp()

// main関数
const main = () => {
  while (true) {
    const dice = rollDice();
    console.log(dice);
    if (dice === 1) {
      break;
    }
  }
};

main();

const 合計を計算して返す = () => {
  const count = 0;
  for (var x = 0; x < 10; x++) {
    count += x;
  }
  return count;
};

const 指定回数なんかする = () => {
  for (var x = 0; x < 10; x++) {
    console.log(x);
  }
};
