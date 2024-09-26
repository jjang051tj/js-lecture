//소스 파일
// console.log("hello world");
//console.log(109201921 + 78779438978972);
/*
  let hello = "hello world";
  console.log(hello);
  console.log("hello");
  console.log(hello + "!!");
  console.log(100 + 100);
  console.log(100 - 90);
  console.log(100 * 90);
  console.log(10 / 3);
  console.log(10 % 4); //  내장함수
  document.write("hello world");
  myDocument.write("문자열");
*/
let myName;
let myWeight = 90;
const PI = 3.14;
const MY_WEIGHT = 95;
myName = "장동건";
let isAdult = true; //boolean   true / false
let myDocument = {
  write: function (str) {
    document.write(str);
  },
};
let student01 = {
  name: "임춘영",
  score: 95,
  mbti: "INFP",
  plus: function (x, y) {
    return x + y;
  },
  school: {
    basic: "일산",
    middle: "정발산",
    high: "풍산",
  },
};
let student02 = {
  name: "전지호",
  score: 94,
  mbti: "ENTP",
};
console.log(student01.plus(20, 30));
console.log(student02.name);

// let studentName01 = "임춘영";
// let score01 = 95;
// let mbti01 = "INFP";

// let studentName02 = "전지호";
// let score02 = 94;
// let mbti02 = "ENTP";

function calc(state, num01, num02) {
  //document.write(num01 / num02 + "<br>");
  //return num01 / num02;
  if (state === "+") {
    return num01 + num02;
  } else if (state === "-") {
    return num01 - num02;
  } else if (state === "*") {
    return num01 * num02;
  } else if (state === "/") {
    return num01 / num02;
  } else {
    alert("연산을 실행할 수 없습니다.");
    return 0;
  }
}

document.write(calc("&", 10, 20)); //5
