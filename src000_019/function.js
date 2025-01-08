function hogehoge1(x, y, z) {
  return x + y + z;
}
var a = hogehoge1(1, 2, 3);
console.log(a);

const hogehoge2 = (x, y) => {
  return x + y;
};
var b = hogehoge2(4, 5);
console.log(b);

function weather(x) {
  var 降水確率 = x;
  if (降水確率 < 30) {
    return '晴れ';
  } else if (降水確率 < 60) {
    return '曇り';
  } else if (降水確率 <= 100) {
    return '雨';
  }
}
console.log(weather(50));
