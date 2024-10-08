//다음아 내가 지금 전지현을 보낼건데 그거 관련된 정보를 보여줘
// http://www.daum.net?query=전지현&size=big

const REST_API_KEY = "f1f09ca75091534fe5396fd9eb6af0b1";
const btnSearch = document.querySelector("#btn-search");
const inputSearchWord = document.querySelector("#search-word");

//node list는 순서가 있음... 마치 배열처럼
//그런데 진짜 배열은 아니다...  유사배열
function showH2() {
  const h2 = document.querySelectorAll("h2");
  h2.forEach(function (element, index) {
    //console.log(element);
    //console.log(index);
    element.style.display = "block";
  });
}

inputSearchWord.addEventListener("keyup", function (e) {
  console.log(e);
  if (e.keyCode === 13) {
    showContents();
  }
});
btnSearch.addEventListener("click", function () {
  showContents();
});
function showContents() {
  showH2();
  kakaoSearch(inputSearchWord.value);
  kakaoSearchVclip(inputSearchWord.value);
}
function kakaoSearch(searchWord) {
  //prettier-ignore
  fetch(`https://dapi.kakao.com/v2/search/image?query=${searchWord}&size=72`,{
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
   
    const list = document.querySelector("#list01");
    list.innerHTML="";
    json.documents.forEach(function(element,index) {
      list.innerHTML+=`<li><a href="${element.image_url}" 
      data-fancybox="${searchWord}" data-caption="${element.display_sitename}"><img src="${element.thumbnail_url}"></a></li>`
    });
  })
}
function kakaoSearchVclip(searchWord) {
  //prettier-ignore
  fetch(`https://dapi.kakao.com/v2/search/vclip?query=${searchWord}&size=30`,{
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
    
    const list = document.querySelector("#list02");
    list.innerHTML="";
    json.documents.forEach(function(element,index) {
      list.innerHTML+=`<li><a href="${element.url}" 
      data-fancybox="${searchWord}" data-caption="${element.title}">
      <img src="${element.thumbnail}"></a></li>`
    });
  })
}
Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

// json
// 자바(객체)  json 자바스크립트(객체)
