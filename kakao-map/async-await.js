/*
async function aa() {
  //return 1;
  const promise = new Promise(function (resolve) {
    setTimeout(function () {
      resolve(1);
    }, 1000);
  });
  const result = await promise; //잠시 대기  약속이 이루어지기를
  console.log("1===", result);
  console.log("2===2");
}
//await는 async안에섬나 쓸 수 있음...
aa();
*/
/*
fetch("test.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    console.log(json);
  });
  */
async function loadJson() {
  const response = await fetch("test.json");
  const json = await response.json();
  console.log(json);
}
loadJson();
