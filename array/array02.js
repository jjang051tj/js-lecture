// const fruits = ["apple", "melon", "berry"];
// let spliceFruits = fruits.splice(0, 1);
// console.log(spliceFruits);
// spliceFruits = fruits.splice(0, 1);
// console.log(spliceFruits);
// spliceFruits = fruits.splice(0, 1);
// console.log(spliceFruits);

// fruits.push("grape");
// fruits.push("plum");
// fruits.push("kiwi");
// fruits.unshift("lemon");
// console.log(fruits);
// const lastFruit = fruits.pop();
// const lastFruit02 = fruits.shift();
// console.log(fruits);
// console.log(lastFruit);
// console.log(lastFruit02);
const nums = [];
for (let i = 1; i <= 45; i++) {
  nums.push(i);
}
//3/5/7/9/10/11/13
//3/5/7/9/10/11/40
for (let j = 0; j < 6; j++) {
  //console.log(nums.splice(parseInt(Math.random() * (45 - j)), 1)); //0~44
  //console.log(nums.splice(parseInt(Math.random() * nums.length), 1)); //0~44
  const pickedNum = nums.splice(parseInt(Math.random() * nums.length), 1);
  console.log(pickedNum);
  document.write(pickedNum);
}

// console.log(nums[5]); //6
// console.log(nums[9]); //10
// console.log(nums[12]); //
// console.log(nums[33]);
// console.log(nums[41]);
// console.log(nums[42]);
