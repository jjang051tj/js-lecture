const promise = fetch("call.json");
promise
  .then((response) => response.json())
  .then((txt) => {
    console.log(txt.students);
    const list = document.querySelector("ul");
    txt.students.forEach((element) => {
      list.innerHTML += `<li><div>name:${element.name}</div>
      <div>나이:${element.age}</div></li>`;
    });
    //document.querySelector("h1").textContent = txt.name;
  })
  .catch(function (error) {
    console.log("응답도 못했음");
    console.log(error);
  });
//Promise 약속을 한다. //명동에서 만나기로 12시에 만기로 했음...
//console.log(nameTxt);
//console.log("aaaa");
/*
const myPromise = new Promise(function (resolve, reject) {
  const data = 100;
  const error = "약속 펑크";
  //resolve(data);
  //reject(error);
  setTimeout(function () {
    resolve(data);
  }, 3000);
});
myPromise
  .then(function (resolveData) {
    console.log(resolveData);
  })
  .catch(function (err) {
    console.log(err);
  });
  */
