//1. 배열 1 ~ 45
const nums = [];
for (let i = 1; i <= 45; i++) {
  //nums에 값을 밀어넣기
  nums.push(i);
}
//[1~45]  45
//[2~45]  44
//[3~45]  43
//[4~45]  42
//[5~45]  41
//[6~45]  40
const lotto = [];
for (let j = 0; j < 6; j++) {
  // 0*45  < Math.random()*45 < 1*45
  const pickedNum = nums.splice(parseInt(Math.random() * nums.length), 2).pop(); //22
  console.log(pickedNum);
  lotto.push(pickedNum);
}
console.log(nums);
console.log(lotto); //[22,33,15,4,2,35];
lotto.sort(function (a, b) {
  return a > b ? 1 : -1; //삼항연산자
  // if (a > b) {
  //   return 1;
  // } else if (a < b) {
  //   return -1;
  // }
});
const lottoList = document.querySelector("#lotto"); //ul
lottoList.innerHTML += "<li>" + lotto[0] + "</li>";
lottoList.innerHTML += "<li>" + lotto[1] + "</li>";
lottoList.innerHTML += "<li>" + lotto[2] + "</li>";
lottoList.innerHTML += "<li>" + lotto[3] + "</li>";
lottoList.innerHTML += "<li>" + lotto[4] + "</li>";
lottoList.innerHTML += "<li>" + lotto[5] + "</li>";
console.log(lotto);
