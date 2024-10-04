// const words =
//   "이런 상황은 지난 2006년 이스라엘의 레바논 전쟁 첫날을 떠올리게 한다. 당시 이스라엘 탱크가 레바논 국경을 넘자마자, 도로에 설치된 폭탄을 건드려 4명의 병사가 사망했다. 이스라엘은 2006년 레바논 전쟁 때 헤즈볼라 분쇄를 목표로 내걸고 레바논 깊숙이 침공했으나, 목표를 달성하지 못하고 철군해야만 했다. 이 전쟁의 경과를 조사한 이스라엘 정부의 위노그라드위원회는 ‘전략적 실패’라고 규정했다.";
// const wordList = words.split(" ");
// console.log(wordList);

const word =
  "이스라엘 이스라엘 이스라엘이 이스라엘의 대대적 공격에 헤즈볼라는 아직 본격적으로 맞서지 못하고 있다. 그러나 이스라엘군은 헤즈볼라가 여전히 재결집해 대규모 공격을 가할 수 있을 것으로 본다. 이스라엘군은 지상 작전이 헤즈볼라의 지하 터널 망과 무기고를 파괴하기 위한 것이라며 대규모 지상전을 벌일 계획이 없다고 밝힌다. 그러나 전쟁은 그 자체로 생물이다. 이스라엘 한 당국자는 “우리 생각대로 되는 일이 아니다. 당연히 전면전에 끌려 들어갈 수 있다”고 말했다. 1982년 레바논을 침공했을 때도 지금과 비슷했다. 제한적 작전만을 계획했던 이스라엘 군이지만 팔레스타인해방기구(PLO)를 추격한 끝에 레바논 깊숙한 수도 베이루트를 포위하기에 이르렀다. 결국 레바논 남부 완충지대로 물러났던 이스라엘은 헤즈볼라와 장기전을 치른 끝에 2000년 철수했다.";
//const aaa = ["이스라엘","이스라엘","이스라엘이"];
const wordList = word.split(" ").reduce(function (accumurator, str, index) {
  //조건을 추가해서 설정해보기....
  if (!accumurator.includes(str)) {
    accumurator.push(str);
  }
  return accumurator; //["이스라엘"] //
}, []);
console.log(wordList);
// //console.log(wordList);
// const wordList02 = wordList.filter(function (str, index) {
//   if (wordList.indexOf(str) === index) {
//     return true;
//   }
// });
// console.log(wordList02);
