function square(num) {
  return num * num;
}
function bmi(height, weight) {
  return weight / square(height / 100);
}
let person01 = {
  weight: 85,
  height: 175,
};
let person02 = {
  weight: 95,
  height: 182,
};

let result01 = bmi(person01.height, person01.weight);
let result02 = bmi(person02.height, person02.weight);

document.write(result01);
document.write("<br>");
document.write(result02);
