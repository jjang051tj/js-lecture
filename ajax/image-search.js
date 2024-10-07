fetch("https://dapi.kakao.com/v2/search/image?query=전지현", {
  method: "GET",
  headers: {
    Authorization: "KakaoAK 05fc9112f7e0216c03e9c5db22e24506",
  },
})
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    console.log(json);
  });
