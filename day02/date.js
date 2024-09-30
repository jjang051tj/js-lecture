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
    num = "0" + num; //09
  }
  return num;
}
function addApm(hour) {
  // 시간이 12보다 크면 PM
  // 작으면 AM
  if (hour > 12) {
    hour = "PM" + addZero(hour - 12);
  } else {
    hour = "AM" + hour;
  }
  return hour;
}
function checkTime() {
  const myDate = new Date();
  const date = addZero(myDate.getDate());
  const year = myDate.getFullYear();

  const hour = addApm(myDate.getHours()); //0~23 13
  const min = addZero(myDate.getMinutes()); //0~59
  const sec = addZero(myDate.getSeconds()); //0~59
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
