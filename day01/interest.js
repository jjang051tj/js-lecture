// js  html
//document 객체
const result = document.querySelector("#result");
const money = document.querySelector("#money");
const rate = document.querySelector("#rate");
const duration = document.querySelector("#duration");
const btnResult = document.querySelector("#btn-result");
btnResult.addEventListener("click", function () {
  result.value =
    parseInt(money.value) +
    parseInt(money.value) *
      (parseFloat(rate.value) / 100) *
      (parseInt(duration.value) / 12);
});
//console.log(parseInt(100.5) + 100);
//console.log(parseFloat("100.5"));
