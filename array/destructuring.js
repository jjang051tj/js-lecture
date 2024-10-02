let array = ["apple", "banana", "berry", "melon"];
let f01 = array[0];
let f02 = array[1];
let f03 = array[2];
console.log(f01, f02, f03);
console.log("====================");
[f01, f02, f03, f04 = "plum"] = array;
console.log(f01, f02, f03, f04);
let person = {
  name: "장동건",
  age: 40,
  weight: 90,
  getWeight: function () {
    return 90;
  },
};
let name = person.name;
let age = person.age;
let weight = person.weight;
//   데이터타입   숫자 문자 boolean undefined null  (원시타입, 기본 타입  primitive)
//   데이터타입   array, 객체 참조값() 주소값
//let { name, age, weight } = person;
let copyFruits = [...array];
let copyPerson = { ...person };
copyPerson.name = "정형돈";
console.log(person.name);
console.log(copyPerson.name);
