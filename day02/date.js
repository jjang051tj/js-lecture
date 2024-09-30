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
// 달 0 ~ 11  12 ;23 ;30
function addZero(num) {
  if (num < 10) {
    num = "0" + num;
  }
  return num;
}
//let value = addZero(12);
//console.log(value);
function checkTime() {
  const myDate = new Date();
  let date = addZero(myDate.getDate());
  const year = myDate.getFullYear();

  let hour = addZero(myDate.getHours()); //0~23
  let min = addZero(myDate.getMinutes()); //0~59
  let sec = addZero(myDate.getSeconds()); //0~59
  // if (sec < 10) {
  //   sec = "0" + sec;
  // }
  // if (min < 10) {
  //   min = "0" + min;
  // }
  // if (hour < 10) {
  //   hour = "0" + hour;
  // }
  // if (date < 10) {
  //   date = "0" + date;
  // }

  inputDate.textContent = `${year}/${monthList[myDate.getMonth()]}/${date}`;
  inputDay.textContent = `${days[myDate.getDay()]}`;
  inputTime.textContent = `${hour} : ${min} : ${sec}`;
}
checkTime();
setInterval(checkTime, 1000);
