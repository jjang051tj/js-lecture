function aa() {
  return new Promise(function (resolve, reject) {
    resolve(100);
  });
}
aa()
  .then(function (result) {
    console.log(result);
    //then함수안에서 return을 쓰면 promise로 감싸서 넘겨준다.
    throw new Error("나는 약속을 못지켰어요...");
    return result + 10;
  })
  .then(function (result) {
    console.log(result);
    return result + 10;
  })
  .then(function () {
    console.log(result);
  })
  .catch(function (error) {
    console.log(error);
  });
