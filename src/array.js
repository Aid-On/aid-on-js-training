var box = [1, 2, 3, 4];
console.log(box);
box.push(10);
console.log(box);
box.pop();
console.log(box);
box.shift();
console.log(box);
box.unshift(4, 5);
console.log(box);

for (const item of box) {
  console.log(item);
}
