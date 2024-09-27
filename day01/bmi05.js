// console.log("hello world");
// alert("hello world");

//95 / (18.2*18.2);
let inputHeight = document.querySelector("#user-height");
console.log(inputHeight.value);
//console.log(document.querySelector("#user-height").value);

let inputWeight = document.querySelector("#user-weight");
console.log(inputWeight.value);

let btnResult = document.querySelector("#btn-result");
let btnReset = document.querySelector("#btn-reset");

let result = document.querySelector("#result");
let result02 = document.querySelector("#result02");

btnResult.addEventListener("click", function () {
  let bmi =
    inputWeight.value / ((inputHeight.value / 100) * (inputHeight.value / 100));
  result.value = bmi;
  //비만 > 25, 저체중 < 18.5,    18.5 < 정상 < 25
  // 정상 / 비정상   18.5 크고 25보다 작으면
  if (bmi > 18.5) {
    result02.value = "비만입니다. 살 쫌 빼세요";
  } else if (bmi < 18.5) {
    result02.value = "저체중입니다. 운동 좀 하세요";
  } else {
    result02.value = "정상입니다.";
  }

  // if (bmi > 18.5 && bmi < 25) {
  //   result02.value = "정상입니다.";
  // } else {
  //   result02.value = "비정상입니다.";
  // }
});

btnReset.addEventListener("click", function () {
  inputHeight.value = "";
  inputWeight.value = "";
  result.value = "";
});

function validateInput() {
  const inputField = document.querySelector("#user-height");
  const inputField02 = document.querySelector("#user-weight");
  const value = inputField.value;
  const value02 = inputField02.value;

  // 숫자가 아닌 문자가 포함되면 제거
  inputField.value = value.replace(/[^0-9]/g, "");
  inputField02.value = value02.replace(/[^0-9]/g, "");
}

console.log("10 > 20 ====", 10 > 20);
console.log("10 < 20 ====", 10 < 20);
console.log("10 === 20 ====", 10 === 20);
console.log("10 !== 20 ====", 10 !== 20);
console.log("10 >= 10 ====", 10 >= 10);
console.log("10 <= 10 ====", 10 <= 10);
