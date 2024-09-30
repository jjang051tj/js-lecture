let i;
for (let i = 0; i < 10; i++) {
  console.log(i);
  // 0 ~ 9
}
console.log(i);
let num = 100;
if (true) {
  let num = 100;
  console.log(num);
}
console.log(num);
i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
// 변수의 유효범위  {}
// 배열 array
const fruits = ["apple", "berry", "plum"];
let fruit0 = "apple";
let fruit1 = "berry";
let fruit2 = "plum";
console.log(fruit0);
console.log(fruit1);
console.log(fruit2);
for (let i = 0; i < 3; i++) {
  console.log(fruits[i]);
}
