//날짜 관련된

//객체를 호출
const inputDate = document.querySelector("#date");
const inputDay = document.querySelector("#day");
const inputTime = document.querySelector("#time");
const inputSeason = document.querySelector("#season");
//prettier-ignore
const days = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
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
    hour = "<span>PM</span>" + addZero(hour - 12);
  } else {
    hour = "<span>AM</span>" + hour;
  }
  return hour;
}
function checkSeason(month) {
  if (month >= 3 && month < 6) {
    //3,4,5
    return "spring";
  } else if (month >= 6 && month < 9) {
    //6,7,8
    return "summer";
  } else if (month >= 9 && month < 12) {
    //9,10,11
    return "fall";
  } else {
    return "winter";
  }
}

function checkTime() {
  const myDate = new Date();
  const date = addZero(myDate.getDate());
  const year = myDate.getFullYear();
  //const month = myDate.getMonth();

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

  inputDate.textContent = `${year} / ${addZero(
    myDate.getMonth() + 1
  )} / ${date}`;
  inputDay.textContent = `${days[myDate.getDay()]}`;
  inputTime.innerHTML = `${hour} : ${min} : ${sec}`;
  inputSeason.textContent = checkSeason(myDate.getMonth() + 1);
}
checkTime();
setInterval(checkTime, 1000);
//봄(4~6)/여름(6~9)/ 가을(10~11)/ 겨울(12~3) 출력해보기
