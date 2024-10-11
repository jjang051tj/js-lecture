// setTimeout(function () {
//   console.log(1);
//   setTimeout(function () {
//     console.log(2);
//     setTimeout(function () {
//       console.log(3);
//     }, 1000);
//   }, 1000);
// }, 1000);
// function aa() {
//   console.log(1);
//   setTimeout(bb, 1000);
// }
// function bb() {
//   console.log(2);
//   setTimeout(cc, 1000);
// }
// function cc() {
//   console.log(3);
// }
// aa();
function aa() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(1);
    }, 1000);
  });
}
function bb() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(2);
    }, 1000);
  });
}
function cc() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(3);
    }, 1000);
  });
}
aa()
  .then(function (result) {
    console.log(result);
    return bb();
  })
  .then(function (result) {
    console.log(result);
    return cc();
  })
  .then(function (result) {
    console.log(result);
  });

//callback 지옥
