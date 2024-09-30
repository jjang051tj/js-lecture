//날짜 관련된

//객체를 호출
const inputDate = document.querySelector("#date");
const inputDay = document.querySelector("#day");
const inputTime = document.querySelector("#time");
//prettier-ignore
const days = ["일요일","월요일","화요일","수요일","목요일","금요일","토요일"];
//prettier-ignore
const monthList = 
["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
function checkTime() {
  let myDate = new Date(); // 달 0 ~ 11
  const date = myDate.getDate();
  const year = myDate.getFullYear();

  const hour = myDate.getHours();
  const min = myDate.getMinutes();
  const sec = myDate.getSeconds();
  inputDate.textContent = `${year}/${monthList[myDate.getMonth()]}/${date}`;
  inputDay.textContent = `${days[myDate.getDay()]}`;
  inputTime.textContent = `${hour} : ${min} : ${sec}`;
}
checkTime();
setInterval(checkTime, 1000);
