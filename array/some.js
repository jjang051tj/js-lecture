const obj = { id: "aaa", pw: "1234" };
const nums = [6, 6, 6, 6, 6];
const includeSeven = nums.every(function (num, index) {
  if (num === 6) {
    return true;
  }
});
//some은 하나만 참이어도 참
//every는 싹다  참이어야 참
console.log(includeSeven);
//주어진 숫자가 1부터 10사이에 있는지 판별하고 싶다.
const school = [90, 98, 92, 95, 89]; //싹다 90이상일때만 성공
let i = 0;
const isTrue = school.some(function (num, index) {
  console.log(i);
  i++;
  if (num >= 90) {
    return true;
  }
});
console.log(i);
console.log(isTrue);
