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
const copyNums = [...nums];
const lotto = [];
for (let j = 0; j < 6; j++) {
  //console.log(nums.splice(parseInt(Math.random() * (45 - j)), 1)); //0~44
  //console.log(nums.splice(parseInt(Math.random() * nums.length), 1)); //0~44
  const pickedNum = copyNums
    .splice(parseInt(Math.random() * copyNums.length), 1)
    .pop(); //[3]
  //console.log(pickedNum);
  lotto.push(pickedNum);
  lotto.sort((a, b) => a - b);
}
document.write(lotto);

// console.log(nums[5]); //6
// console.log(nums[9]); //10
// console.log(nums[12]); //
// console.log(nums[33]);
// console.log(nums[41]);
// console.log(nums[42]);

//splice원본배열이 훼손된다. 웬만하면 원본데이터는 바꾸지 않는게 좋다.
const teamList = [
  "tiger",
  "lion",
  "twins",
  "bear",
  "wiz",
  "landers",
  "giants",
  "eagles",
  "dinos",
  "heroes",
];
const copyTeamList = [...teamList];
const copyTeamList02 = [...teamList];
const gameList = copyTeamList.splice(0, 5);
console.log(gameList);
const gameList02 = copyTeamList02.splice(0, 5);
console.log(gameList02);
console.log(gameList);
