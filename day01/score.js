let kor = 95;
let eng = 95;
let math = 90;
//1 총합 구하기
//2 평균 구하기
//3 90 이상이면 A  80이상이면 B 70이상이면 C 60이상이면 D 나머지 F 처리 해보기
let sum = kor + eng + math;
let avg = sum / 3;
let score;
if (avg >= 90) {
  score = "A";
}
if (avg >= 80 && score < 90) {
  score = "B";
}
if (avg >= 70 && score < 80) {
  score = "C";
}
if (avg >= 60 && score < 70) {
  score = "D";
}
if (avg < 60) {
  score = "F";
}
console.log(score);
