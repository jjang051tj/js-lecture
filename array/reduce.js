let min = 0;
const nums = [
  483894832, 33213, 3221, 32445, 87865, 1133, 54534, 5452354, 99787, 1900,
];
let sum = 0;
// for (let i = 0; i < nums.length; i++) {
//   sum += nums[i];
// }
// nums.forEach(function (num, i) {
//   sum += num;
// });
//reduce 누산기
//accumurator  누적시킬 초기값,
//num  배열의 인자값
sum = nums.reduce(function (accumurator, num, index) {
  console.log(accumurator, "===", num, "===", index);
  //accumurator는 누적된 값을 말한다.
  return accumurator + num; //여기서 누적된다.
}, 0);
min = nums.reduce(function (accumurator, num, index) {
  console.log(accumurator, "===", num, "===", index);
  if (accumurator > num) {
    return accumurator;
  } else {
    return num;
  }
});
const fruits = ["Apple", "Banana", "Grape", "Plum", "Kiwi"];
// 제일 먼저 찾는 사람
// 단어중에 a가 들어있는 것을 찾아 배열로 만들어 보세요. 싹다 대문자로 바꾸어서 배열 만들기
const upperFruits = fruits.map(function (str, index) {
  return str.toUpperCase();
});
//method chainning

//1번째
// const includesAFruits = fruits
//   .map(function (str, index) {
//     return str.toUpperCase();
//   })
//   .filter(function (str, index) {
//     if (str.includes("A") === true) {
//       return true;
//     }
//   });

//2번째
// const includesAFruits = fruits
//   .map((str, index) => {
//     return str.toUpperCase();
//   })
//   .filter((str, index) => {
//     if (str.includes("A") === true) {
//       return true;
//     }
//   });

//3번째
// const includesAFruits = fruits
//   .map((str, index) => str.toUpperCase())
//   .filter((str, index) => {
//     if (str.includes("A") === true) return true;
//   });

//4번째
// const includesAFruits = fruits
//   .map((str, index) => str.toUpperCase())
//   .filter((str, index) => {
//     return str.includes("A");
//   });

//5번째
// const includesAFruits = fruits
//   .map((str, index) => str.toUpperCase())
//   .filter((str, index) => str.includes("A"));

//6번째
//prettier-ignore
// const includesAFruits = fruits
//   .map(str => str.toUpperCase())
//   .filter(str => str.includes("A"));

console.log(includesAFruits);
