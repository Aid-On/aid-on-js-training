// 問題：マインクラフトのインベントリ管理システム
// 以下の仕様を満たすコードを書いてください

// 1. 以下のアイテムリストが与えられています
const inventory = [
  'ダイヤモンド剣',
  '鉄のツルハシ',
  '木の斧',
  '石のシャベル',
  '松明',
];

// 2. 以下の関数を実装してください

// 2.1 displayInventory()
// - インベントリ内の全てのアイテムをスロット番号付きで表示する関数
// - 出力例：
//   スロット1: ダイヤモンド剣
//   スロット2: 鉄のツルハシ
//   ...
function displayInventory() {
  // ここにコードを書いてください

  const count = inventory.length;
  for (var x = 0; x < count; x++) {
    console.log('スロット', x + 1, ': ', inventory[x]);
  }
}

// 2.2 addNewItems()
// - 以下のアイテムをインベントリの最後に追加する関数
// - 追加するアイテム：["金のヘルメット", "チェストプレート"]
// - 追加後に全てのアイテムを表示する
function addNewItems() {
  // ここにコードを書いてください
  inventory.push('金のヘルメット', 'チェストプレート');
  displayInventory();
}

// 2.3 addEmergencyFood()
// - 緊急食料をインベントリの先頭に追加する関数
// - 追加するアイテム："焼き肉"
// - 追加後に全てのアイテムを表示する
function addEmergencyFood() {
  // ここにコードを書いてください
  inventory.unshift('焼き肉');
  displayInventory();
}

// 2.4 useLastItem()
// - 最後のアイテムを使用して削除する関数
// - 削除する前と後のインベントリを表示する
// - 使用したアイテムの名前を表示する
function useLastItem() {
  // ここにコードを書いてください
  const lastItem = inventory[inventory.length - 1];
  console.log(lastItem, 'を使用する');
  inventory.splice(inventory.length - 1);
  displayInventory();
}

// 2.5 findTools()
// - ツール（道具）だけを見つけて新しい配列に入れる関数
// - ツールは「剣」「ツルハシ」「斧」「シャベル」が含まれるもの
// - 見つかったツールの数と、該当するアイテムのリストを表示する
function findTools() {
  // ここにコードを書いてください
  const tools = inventory.filter((item) => {
    const matchSword = item.indexOf('剣') !== -1;
    const matchpickaxe = item.indexOf('ツルハシ') !== -1;
    const matchAxe = item.indexOf('斧') !== -1;
    const matchshovel = item.indexOf('シャベル') !== -1;

    return matchSword || matchpickaxe || matchAxe || matchshovel;
  });
  console.log(tools);
}

// 関数を実行してテストする
console.log('=== 現在のインベントリ ===');
displayInventory();

console.log('\n=== 新しいアイテムを追加 ===');
addNewItems();

console.log('\n=== 緊急食料を追加 ===');
addEmergencyFood();

console.log('\n=== 最後のアイテムを使用 ===');
useLastItem();

console.log('\n=== ツールを検索 ===');
findTools();
