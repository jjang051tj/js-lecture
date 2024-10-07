console.log("111");
setTimeout(function () {
  console.log("333");
}, 0);
const clearID = setInterval(function () {
  console.log("444");
}, 1000);
document.addEventListener("click", function () {
  console.log("555");
  clearInterval(clearID);
});
//fetch 다른곳에 있는 문서 들고오기
//비동기적 실행
console.log("222");
