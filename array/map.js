const nums = [1, 2, 3, 4, 5];
const doubleNums = nums.map(function (num, index) {
  if (num % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
});
//foreach는 배열을 순회만 한다. 리턴이 없다.
const doubleNums02 = []; //출력할때 많이 씀
nums.forEach(function (num, index) {
  if (num % 2 === 0) {
    doubleNums02.push("even");
  } else {
    doubleNums02.push("odd");
  }
});
const fruits = ["apple", "banana", "kiwi", "berry"];
//대문자로 바꾸어서 배열로 만들기;
console.log("apple".toUpperCase());
const upperFruits = fruits.map(function (str, index) {
  return str.toUpperCase();
});
const upperFruits02 = [];
fruits.forEach(function (str, index) {
  upperFruits02.push(str.toUpperCase());
});
console.log(upperFruits);
const users = [
  { id: 1, name: "장성호" },
  { id: 2, name: "장동건" },
  { id: 3, name: "정형돈" },
];
const names = users.map(function (obj, index) {
  return obj.name;
});
console.log(names);
//names를 {idx:1,korName:"장성호"},{idx:2,korName:"장동건"},{idx:3,korName:"정형돈"},
const korUsers = names.map(function (str, index) {
  return { idx: index + 1, korName: str };
});
console.log(korUsers);
//reduce
