//1. 배열 1 ~ 45
const nums = [];
for (let i = 1; i <= 45; i++) {
  //nums에 값을 밀어넣기
  nums.push(i);
}
const colors = ["yellow", "blue", "red", "gray", "green"];
//[1~45]  45
//[2~45]  44
//[3~45]  43
//[4~45]  42
//[5~45]  41
//[6~45]  40
for (let k = 0; k < 5; k++) {
  const lotto = [];
  const copyNums = [...nums];
  for (let j = 0; j < 6; j++) {
    // 0*45  < Math.random()*45 < 1*45
    const pickedNum = copyNums
      .splice(parseInt(Math.random() * copyNums.length), 1)
      .pop(); //22
    console.log(pickedNum);
    lotto.push(pickedNum);
  }
  lotto.sort(function (a, b) {
    return a > b ? 1 : -1; //삼항연산자
  });
  const lottoList = document.querySelector("#lotto"); //ul
  for (let i = 0; i < 6; i++) {
    if (lotto[i] >= 1 && lotto[i] <= 10) {
      lottoList.innerHTML += `<li style="background-color:orange">${lotto[i]}</li>`;
    } else if (lotto[i] >= 11 && lotto[i] <= 20) {
      lottoList.innerHTML += `<li style="background-color:blue">${lotto[i]}</li>`;
    } else if (lotto[i] >= 21 && lotto[i] <= 30) {
      lottoList.innerHTML += `<li style="background-color:red">${lotto[i]}</li>`;
    } else if (lotto[i] >= 31 && lotto[i] <= 40) {
      lottoList.innerHTML += `<li style="background-color:gray">${lotto[i]}</li>`;
    } else {
      lottoList.innerHTML += `<li style="background-color:green">${lotto[i]}</li>`;
    }
  }
  console.log(lotto);
}
