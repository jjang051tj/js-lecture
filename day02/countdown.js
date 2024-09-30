const remaining = document.querySelector("#remaining");
const remainingDay = document.querySelector("#day");
const remainingTime = document.querySelector("#time");
function addZero(num) {
  if (num < 10) {
    num = "0" + num; //09
  }
  return num;
}
function countDown(dday) {
  const endDate = new Date(dday); //크리스마스
  const currentDate = new Date(); // 현재 날짜
  const diff = endDate - currentDate;
  const diffDate = parseInt(diff / 1000 / 60 / 60 / 24);
  const diffHour = addZero(parseInt(diff / 1000 / 60 / 60) % 24);
  const diffMin = addZero(parseInt(diff / 1000 / 60) % 60);
  const diffSec = addZero(parseInt(diff / 1000) % 60);
  //console.log(parseInt(diff / 1000));
  remainingDay.innerHTML = `<strong>${diffDate}</strong><span>일</span>`;
  remainingTime.textContent = `${diffHour} : ${diffMin} : ${diffSec}`;
  //85일 12시간 24분 30초
}
//countDown(2024, 11, 25);
let clearID = setInterval(countDown, 1000, "2024-12-25");
const btns = document.querySelectorAll("#btns button");
btns.forEach(function (el) {
  el.addEventListener("click", function () {
    clearInterval(clearID);
    countDown(this.dataset.day);
    clearID = setInterval(countDown, 1000, this.dataset.day);
  });
});
