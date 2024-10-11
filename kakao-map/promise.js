/*
//promise  약속
//promise 는 비동기 함수에 많이 쓴다.
const result = new Promise(function (resolve, reject) {
  //reject("나는 약속을 안지킴");
  //resolve("나는 약속을 지킴");
  setTimeout(function () {
    resolve("나는 약속을 지킴");
  }, 1000);
})
  .then(function (aaa) {
    console.log(aaa);
  })
  .catch(function (bbb) {
    console.log(bbb);
  })
  .finally(function (ccc) {
    console.log("나는 무조건 호출 됩니다.");
  });
console.log("나는 언제 실행될까요");
//console.log(result);
*/
const myFetch = fetch("test.json");
//resolve, reject
myFetch
  .then(function (response) {
    //console.log("나는 약속을 지킨상태 즉 fullfield");
    //console.log(response);
    //console.log("response.json()은 리턴값이 promise이다", response.json());
    return response.json();
  })
  .then(function (json) {
    console.log(json);
  })
  .catch(function (error) {
    console.log("나는 약속을 지키지 않은 상태 즉 reject 상태");
    console.log(error);
  })
  .finally(function () {
    console.log("난 마지막에 무조건 호출 됩니다.");
  });
console.log(myFetch);

// 1초 끝나고 1
// 다시 1초 지나서 2
// 다시 1초 지나서 3 출력하기....
