const last = document.querySelector("#last");
last.textContent = "더조은";
const word = document.querySelector("#word");
word.addEventListener("keyup", function (e) {
  console.log("키가 눌러졌습니다.");
  if (e.keyCode === 13) {
    //console.log("enter 눌렀음");
    const lastChar = last.textContent.charAt(last.textContent.length - 1);
    //console.log(lastChar);
    if (lastChar === word.value.charAt(0)) {
      console.log("맞다");
      last.textContent = word.value;
      word.value = "";
      //
    }
  }
});
