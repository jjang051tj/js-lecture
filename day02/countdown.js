const remainingTime = document.querySelector("#remaining-time");
function countDown(dday) {
  const endDate = new Date(dday); //크리스마스
  const currentDate = new Date(); // 현재 날짜
  const diff = endDate - currentDate;
  const diffDate = parseInt(diff / 1000 / 60 / 60 / 24);
  const diffHour = parseInt(diff / 1000 / 60 / 60) % 24;
  const diffMin = parseInt(diff / 1000 / 60) % 60;
  const diffSec = parseInt(diff / 1000) % 60;
  //console.log(parseInt(diff / 1000));
  remainingTime.textContent = `${diffDate}일 ${diffHour}시 ${diffMin}분 ${diffSec}초`;
  //85일 12시간 24분 30초
}
//countDown(2024, 11, 25);
setInterval(countDown, 1000, "2024-12-25");
