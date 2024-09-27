const userEmail = document.querySelector("#user-email"); // 변수 선언문
const userPw = document.querySelector("#user-pw");
const btnLogin = document.querySelector("#btn-login");
const loginEmail = "jjang051@hanmail.net";
const loginPw = "1234";
btnLogin.addEventListener("click", function () {
  // 문(statement)  /  식(expression)   + - * / %
  // && (and)  || (or)
  if (userEmail.value === loginEmail && userPw.value === loginPw) {
    alert("로그인 성공");
  } else {
    alert("로그인 실패");
  }
});
console.log(100 == "100");
//선언문 / 조건문 / 반복문
//5+3
// 프로그램의 실행을 수행하는 단위
