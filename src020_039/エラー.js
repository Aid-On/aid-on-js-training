const text = (input) => {
  if (0 === input) {
    throw new Error("0は不正な値です");
  }
  return "マグロ";
};
console.log(text(7));

/*
 throw new Error("なんか問題が起きたよ")
 */
