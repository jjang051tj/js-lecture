let person01 = {
  weight: 85,
  height: 175,
};
let person02 = {
  weight: 95,
  height: 182,
};

let result01 =
  person01.weight / ((person01.height / 100) * (person01.height / 100));

let result02 =
  person02.weight / ((person02.height / 100) * (person02.height / 100));

document.write(result01);
document.write("<br>");
document.write(result02);
