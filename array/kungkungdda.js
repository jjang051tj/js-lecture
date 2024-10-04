const last = document.querySelector("#last");
last.textContent = "더조은";
const word = document.querySelector("#word");
//이전에 입력한 글자들 중에 내가 다시 입력한 글자가 있는지 따져야함....
//includes
const wordList = [];
word.addEventListener("keyup", function (e) {
  console.log("키가 눌러졌습니다.");
  if (e.keyCode === 13) {
    //console.log("enter 눌렀음");
    const lastChar = last.textContent.charAt(last.textContent.length - 1);
    //console.log(lastChar);
    if (lastChar === word.value.charAt(0) && !wordList.includes(word.value)) {
      console.log("맞다");
      last.textContent = word.value;
      wordList.push(word.value);
      word.value = "";
      console.log(wordList);
      //
    } else {
      alert("썼던 단어는 쓸 수 없습니다.");
      word.value = "";
    }
  }
});
