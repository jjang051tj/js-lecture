//async await
/*
서버에 데이터 들고올때 fetch("서버주소",{
  key:value,
  key:value
})
*/
fetch("https://dapi.kakao.com/v2/search/image?query=장원영", {
  headers: {
    Authorization: "KakaoAK a4322cd945d88b2a3d29399c28fe740f",
  },
})
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    //console.log(json.typoList);
    const list = document.querySelector(".list");
    //jQuery는 dom(document object model) 을 찾고 조작하는데 최고의 라이브러리이다.
    json.documents.forEach(function (element, index) {
      list.innerHTML += `<li class="item">
      <a href="">
        <div class="img">
          <img src="${element.image_url}" alt="" />
        </div>
        <div class="content">
          <h2>${element.display_sitename}</h2>
          <p>${element.datetime}</p>
          <p class="point">${element.collection}</p>
        </div>
      </a>
    </li>`;
    });
    imagesLoaded(".list", function () {
      const iso = new Isotope(".list", {
        // options
        itemSelector: ".item",
        layoutMode: "masonry",
      });
    });
  });
