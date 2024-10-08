//다음아 내가 지금 전지현을 보낼건데 그거 관련된 정보를 보여줘
// http://www.daum.net?query=전지현&size=big

const REST_API_KEY = "f1f09ca75091534fe5396fd9eb6af0b1";
const btnSearch = document.querySelector("#btn-search");
const inputSearchWord = document.querySelector("#search-word");
btnSearch.addEventListener("click", function () {
  kakaoSearch(inputSearchWord.value);
});
function kakaoSearch(searchWord) {
  //prettier-ignore
  fetch(`https://dapi.kakao.com/v2/search/image?query=${searchWord}`,{
  headers:{
    Authorization:`KakaoAK ${REST_API_KEY}`
  }
})
.then(function(response) {
  console.log(response); //Response
  return response.json();
})
.then(function(json) {
  //console.log(json);
  const list = document.querySelector("#list");
  list.innerHTML="";
  json.documents.forEach(function(element,index) {
    list.innerHTML+=`<li><img src="${element.thumbnail_url}"></li>`
  });
})
}

// json
// 자바(객체)  json 자바스크립트(객체)
