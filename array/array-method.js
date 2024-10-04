// const array01 = new Array(1, 2); // 미리 길이를 확보  1,2,und,und,und,
// const array02 = [];
// const array03 = new Array(1, 2, 3, 4);
// // iterable
// array02[0] = "사과";
// array02[1] = "배";
// array02[2] = "딸기";
// array02[3] = "바나나";
// array01[5] = "자바스크립트는 왜 이런걸까요";
// const string01 = "a,b,c,d,e,f,g";
// const stringArray = string01.split(",");
// console.log(array01.length); //자바스크립트는 배열의 길이를 속성으로 제공한다.
// console.log(array01[4]); //자바스크립트는 배열의 길이를 속성으로 제공한다.
// console.log(array02.join("/")); //자바스크립트는 배열의 길이를 속성으로 제공한다.
// console.log(stringArray[3]); //자바스크립트는 배열의 길이를 속성으로 제공한다.
// document.write(array02.join());
// for (let i = 0; i < array02.length; i++) {
//   console.log(array02[i]);
// }
// array02.forEach(function (str, i, arr) {
//   console.log(arr);
// });
const str = "사과 배 딸기 포도 사과 자두 감자 포도";
const fruits = str.split(" ");
//fat arrow function
// fruits.forEach((str, index) => {
//   console.log(str);
// });
// //새로운 배열을 만들어준다.
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(fruits.indexOf("키위")); //indexing
// const twoWords = fruits.filter(function (str, index) {
//   if (str.length === 2) {
//     return true;
//   }
// });
// const even = nums.filter(function (num, index) {
//   if (num % 2 === 0 && num <= 6) {
//     return true;
//   }
// });
// const fruits02 = fruits.filter(function (str, index) {
//   console.log(fruits.indexOf(str)); //사과, 배, 딸기, 포도, 사과, 자두, 감자, 포도
//   console.log(index); // 0,1,2,3,4,5,6,7
//   if (fruits.indexOf(str) === index) {
//     return true;
//   }
// });
const apple = fruits.find(function (str, index) {
  console.log(index);
  if (str === "포도") {
    return true;
  }
});
//쿵쿵따
//자동차 차범근 근거리 이발소 소머리 이발소
const apple02 = fruits.includes("사과", 0);
console.log(apple02);
