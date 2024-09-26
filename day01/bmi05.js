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

btnResult.addEventListener("click", function () {
  //alert(inputWeight.value);
  //alert(inputHeight.value);
  let bmi =
    inputWeight.value / ((inputHeight.value / 100) * (inputHeight.value / 100));
  result.value = bmi;
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
