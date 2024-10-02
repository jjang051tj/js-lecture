//모든 객체는 참조한다.
//let array01 = new Array(1, 2, 3);
//let copyArrary = array01; //얕은 복사  shallow copy
//let copyArrary = [...array01]; //...은 spread연산자이다.
//let copyArrary = array01.concat(); //배열 합칠때 con
// console.log(array01);
// console.log(copyArrary);
// copyArrary.push(4);
// array01.push(5);
// console.log(array01);
// console.log(copyArrary);
// console.log(copyArrary === array01);
// 구조분해할당
//let a = 10;
//let b = 20; //a는 b값을 갖고 b는 a값을 가지게  a=20, b=10
// a = b; // a=20;
// b = a; // b=20;
// let c = a;
// a = b;
// b = c;
// console.log(a, b);
//[a, b] = [b, a];
//console.log(a, b);
let fruits = ["apple", "banana"]; // 배열,객체 [], {name:"장성호",age:30};
let [f01, f02, f03] = fruits;
console.log(f01, f02, f03);
let a = 10;
let b = 20;
[a, b] = [b, a];
let person = { name: "장성호", age: 30 };
let { name, age } = person;
let { name: myName, age: myAge } = person;
console.log(name, "===", age);
console.log(myName, "===", myAge);
// []배열만들때
// () 연산할때 우선 순위  function 함수이름() {}  함수의 몸통  if() {} , for() {}
// {} 객체 만들때  if(조건) { 실행문};  for() { 실행문}   function 함수이름() {실행문}
// 내장객체
const myDate = new Date(); //새로운 객체 선언
// const console =  new console();
// const document = new Document();
let [num01, num02, num03, ...num04] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//console.log(num01, num02, num03, num04[0]);
let aa = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let bb = [...aa];
console.log(bb);
bb.push(10);
console.log(bb);
