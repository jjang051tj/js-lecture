fetch("../data/data.json") //서버 주소가 들어가면 됨(db가 반영된 json을 리턴 받을 수 있음)
  .then((response) => response.json())
  .then((json) => {
    const list = document.querySelector(".list");
    console.log(json.typoList);
    json.typoList.forEach(function (element, index) {
      list.innerHTML += `<li>
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
  })
  .catch(function (error) {
    console.log(error);
  });
