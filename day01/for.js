// 반복문  for(초기값;조건; 증감)
// 1~100  오일러
let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum = sum + i; //0+1  1;
  console.log(i + "===" + sum);
}
//i=1  sum= sum+i sum = 1
//i=2  sum= 1+2   sum = 3
//i=3  sum= 3+3   sum = 6
//i=4  sum= 6+4   sum = 10
console.log(sum);
