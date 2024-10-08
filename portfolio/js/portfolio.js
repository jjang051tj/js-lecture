//http method
//create  (서버에 값을 입력할때           post)
//read    (서버로부터 값을 받기만 할때     get)
//update  (서버에 있는 값을 수정할때       put/patch)
//delete  (서버에 있는 데이터를 삭제할때   delete )
//promise
fetch("../data/data.json") //서버 주소가 들어가면 됨(db가 반영된 json을 리턴 받을 수)
  .then((response) => response.json())
  .then((json) => {
    console.log(json.typoList);
    const list = document.querySelector(".list");
    //jQuery는 dom(document object model) 을 찾고 조작하는데 최고의 라이브러리이다.
    json.typoList.forEach(function (element, index) {
      list.innerHTML += `<li class="item">
      <a href="">
        <div class="img">
          <img src="../images/${element.img}" alt="" />
        </div>
        <div class="content">
          <h2>${element.title}</h2>
          <p>${element.desc}</p>
          <p class="point">${element.point}</p>
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
  })
  .catch(function (error) {
    console.log(error);
  });
