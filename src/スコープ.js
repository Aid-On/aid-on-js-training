// グローバル空間
var x = 999;

console.log(x); // => 999
hogehoge();

function hogehoge() {
  console.log(x); // 関数のスコープ 空間だから
  var x = 0;
  console.log(x); // => 0
  if (x === 0) {
    // if文のスコープ
    var x = 1;
    console.log(x); // => 1
  }
}

function knock() {
  // 1から10の合計を取る
  // var count = 0;
  var count = 0;
  for (var x = 0; x < 10; x++) {
    count += x;
  }
  console.log(count);

  if (count === 10) {
    var x = 1;
    console.log(x); // => if文の中ではxは1
  } else {
    var x = 2;
    console.log(x); // => else文の中ではxは2
  }
}
