class CraftingGrid {
  constructor(size = 3) {
    this.size = size;
    this.grid = Array(size)
      .fill(undefined)
      .map(() => Array(size).fill(undefined));
  }

  placeItem(row, col, item) {
    if (row < 0 || row >= this.size || col < 0 || col >= this.size) {
      throw new Error("無効な位置です");
    }
    this.grid[row][col] = item;
  }

  setPattern(pattern) {
    if (
      !Array.isArray(pattern) ||
      !pattern.every((row) => Array.isArray(row))
    ) {
      throw new Error("パターンは二次元配列である必要があります");
    }

    const height = pattern.length;
    const width = Math.max(...pattern.map((row) => row.length));

    if (height > this.size || width > this.size) {
      throw new Error(
        `パターンがグリッドサイズ(${this.size}x${this.size})を超えています`
      );
    }

    this.grid = Array(this.size)
      .fill(undefined)
      .map(() => Array(this.size).fill(undefined));

    pattern.forEach((row, rowIndex) => {
      row.forEach((item, colIndex) => {
        if (item !== undefined) {
          this.grid[rowIndex][colIndex] = ITEMS[item] || item;
        }
      });
    });
  }

  display() {
    console.log("クラフトグリッド:");
    console.log("┌" + "───────┬".repeat(this.size - 1) + "───────┐");

    this.grid.forEach((row, rowIndex) => {
      const cells = row.map((item) => {
        const content = item ?? "空";
        return ` ${content.padEnd(5)} `;
      });
      console.log("│" + cells.join("│") + "│");

      if (rowIndex < this.size - 1) {
        console.log("├" + "───────┼".repeat(this.size - 1) + "───────┤");
      }
    });

    console.log("└" + "───────┴".repeat(this.size - 1) + "───────┘");
  }

  matchesPattern(recipePattern) {
    const patternHeight = recipePattern.length;
    const patternWidth = recipePattern[0].length;

    if (patternHeight > this.size || patternWidth > this.size) {
      return false;
    }

    for (
      let offsetRow = 0;
      offsetRow <= this.size - patternHeight;
      offsetRow++
    ) {
      for (
        let offsetCol = 0;
        offsetCol <= this.size - patternWidth;
        offsetCol++
      ) {
        if (this.matchesPatternAtOffset(recipePattern, offsetRow, offsetCol)) {
          return true;
        }
      }
    }
    return false;
  }

  matchesPatternAtOffset(pattern, offsetRow, offsetCol) {
    for (let row = 0; row < pattern.length; row++) {
      for (let col = 0; col < pattern[row].length; col++) {
        const gridItem = this.grid[row + offsetRow][col + offsetCol];
        const patternItem =
          pattern[row][col] === undefined
            ? undefined
            : ITEMS[pattern[row][col]];

        if (patternItem !== gridItem) {
          return false;
        }
      }
    }
    return true;
  }
}

function craft(craftingGrid) {
  for (const recipe of RECIPES) {
    if (craftingGrid.matchesPattern(recipe.pattern)) {
      console.log(`${recipe.description}のクラフトに成功しました！`);
      return recipe.result;
    }
  }
  console.log("有効なレシピが見つかりませんでした");
  return null;
}

const ITEMS = {
  WOOD: "原木",
  STICK: "棒",
  WOODEN_PLANKS: "板材",
  WOODEN_PICKAXE: "木のツルハシ",
  WOODEN_AXE: "木の斧",
  WOODEN_SWORD: "木の剣",
  WOODEN_SHOVEL: "木のシャベル",
  WOODEN_HOE: "木のクワ",
  CRAFTING_TABLE: "作業台",
};

const RECIPES = [
  {
    pattern: [
      ["WOODEN_PLANKS", "WOODEN_PLANKS", "WOODEN_PLANKS"],
      [undefined, "STICK", undefined],
      [undefined, "STICK", undefined],
    ],
    result: {
      item: ITEMS.WOODEN_PICKAXE,
      count: 1,
    },
    description: "木のツルハシ",
  },
  {
    pattern: [
      ["WOODEN_PLANKS", "WOODEN_PLANKS", undefined],
      ["WOODEN_PLANKS", "STICK", undefined],
      [undefined, "STICK", undefined],
    ],
    result: {
      item: ITEMS.WOODEN_AXE,
      count: 1,
    },
    description: "木の斧",
  },
  {
    pattern: [
      [undefined, "WOODEN_PLANKS", undefined],
      [undefined, "WOODEN_PLANKS", undefined],
      [undefined, "STICK", undefined],
    ],
    result: {
      item: ITEMS.WOODEN_SWORD,
      count: 1,
    },
    description: "木の剣",
  },
  {
    pattern: [
      [undefined, "WOODEN_PLANKS", undefined],
      [undefined, "STICK", undefined],
      [undefined, "STICK", undefined],
    ],
    result: {
      item: ITEMS.WOODEN_SHOVEL,
      count: 1,
    },
    description: "木のシャベル",
  },
  {
    pattern: [
      ["WOODEN_PLANKS", "WOODEN_PLANKS", undefined],
      [undefined, "STICK", undefined],
      [undefined, "STICK", undefined],
    ],
    result: {
      item: ITEMS.WOODEN_HOE,
      count: 1,
    },
    description: "木のクワ",
  },
];

// 使用例
console.log("木のツルハシを作成してみます...");
const grid = new CraftingGrid();
grid.setPattern([
  ["WOODEN_PLANKS", "WOODEN_PLANKS", "WOODEN_PLANKS"],
  [undefined, "STICK", undefined],
  [undefined, "STICK", undefined],
]);
grid.display();
const 木のツルハシ = craft(grid);
console.log("作成結果:", 木のツルハシ);

console.log("木の斧を作成してみます...");
grid.setPattern([
  ["WOODEN_PLANKS", "WOODEN_PLANKS", undefined],
  ["WOODEN_PLANKS", "STICK", undefined],
  [undefined, "STICK", undefined],
]);
grid.display();
const 木の斧 = craft(grid);
console.log("作成結果:", 木の斧);

console.log("木の剣を作成してみます...");
grid.setPattern([
  [undefined, "WOODEN_PLANKS", undefined],
  [undefined, "WOODEN_PLANKS", undefined],
  [undefined, "STICK", undefined],
]);
grid.display();
const 木の剣 = craft(grid);
console.log("作成結果:", 木の剣);

console.log("木のシャベルを作成してみます...");
grid.setPattern([
  [undefined, "WOODEN_PLANKS", undefined],
  [undefined, "STICK", undefined],
  [undefined, "STICK", undefined],
]);
grid.display();
const 木のシャベル = craft(grid);
console.log("作成結果:", 木のシャベル);

console.log("木のクワを作成してみます...");
grid.setPattern([
  ["WOODEN_PLANKS", "WOODEN_PLANKS", undefined],
  [undefined, "STICK", undefined],
  [undefined, "STICK", undefined],
]);
grid.display();
const 木のクワ = craft(grid);
console.log("作成結果:", 木のクワ);
