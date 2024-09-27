for (let i = 1; i < 10; i++) {
  let dan = "";
  for (let j = 1; j < 10; j++) {
    dan += j + "x" + i + "=" + i * j + "\t";
  }
  console.log(dan);
}
// 1x1 = 1  2x1=2  3x1=3
// 1x2 = 2  2x2=4  3x2=6
// 1x3 = 3  2x3=6  3x3=9
