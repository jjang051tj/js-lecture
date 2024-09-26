// console.log("hello world");
// alert("hello world");

//95 / (18.2*18.2);
let inputHeight = document.querySelector("#user-height");
console.log(inputHeight.value);
//console.log(document.querySelector("#user-height").value);

let inputWeight = document.querySelector("#user-weight");
console.log(inputWeight.value);

let btnResult = document.querySelector("#btn-result");
let btnResult02 = document.querySelector("#btn-result02");

btnResult.addEventListener("click", function () {
  //alert(inputWeight.value);
  //alert(inputHeight.value);
  let bmi =
    inputWeight.value / ((inputHeight.value / 100) * (inputHeight.value / 100));
  document.write(bmi);
});

// function aa(msg) {
//   alert(msg);
// }
// aa("까꿍");
