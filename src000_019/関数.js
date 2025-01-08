// 関数の作り方 (function版)
// tpを例にした場合
// function tp(name, x, y, z) {
//   console.log(`${name}を (${x}, ${y}, ${z})に転送しました`);
// }
// tp("k", 0, 60, 0);
// function tax(money) {
//   return money * 0.1 + money;
// }
// console.log(`${tax(100)}`);
// 何もしない関数
function 関数1() {}

// 1つの引数を受け取ってそのまま終了する関数
function 関数2(引数1) {}

// 複数の引数を受け取ってそのまま終了する関数
function 関数3(引数1, 引数2) {}

// 引数は取らないけど固定の数字を返す関数
function 関数4() {
  return 0;
}

// 引数を受け取ってそのまま返す関数
function 関数5(引数1) {
  return 引数1;
}

// 関数の作り方 (const版)
const tp = (name, x, y, z) => {
  console.log(`${name}を (${x}, ${y}, ${z})に転送しました`);
};

// 関数オブジェクト
const const関数 = () => {
  return 0;
};

// console.log(`${name}を (${x}, ${y}, ${z})に転送しました`);

// 関数の使い方
tp("atzurody", -1800, -60, -200);

税金を求める関数;
const tax = (money) => {
  return money * 0.1 + money;
};
console.log(tax(100));
const salary = (hourly, worktime) => {
  return hourly * worktime;
};
console.log(salary(968, 20 * 6));
