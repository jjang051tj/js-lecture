const list = document.querySelector("#list");
// list.textContent = "<li>1</li>";
// 나열
// 샤인머스켓,사과, 멜론,토마토
//productList[0].price
const productList = [
  {
    title: "지오다노 자켓",
    img: "hanee.png",
    price: 30000,
  },
  {
    title: "홈런볼",
    img: "homerunball.jpg",
    price: 15000,
  },
  {
    title: "지오다노 자켓",
    img: "hanee.png",
    price: 30000,
  },
  {
    title: "홈런볼",
    img: "homerunball.jpg",
    price: 15000,
  },
  {
    title: "지오다노 자켓",
    img: "hanee.png",
    price: 30000,
  },
  {
    title: "홈런볼",
    img: "homerunball.jpg",
    price: 15000,
  },
  {
    title: "지오다노 자켓",
    img: "hanee.png",
    price: 30000,
  },
  {
    title: "홈런볼",
    img: "homerunball.jpg",
    price: 15000,
  },
  {
    title: "지오다노 자켓",
    img: "hanee.png",
    price: 30000,
  },
  {
    title: "홈런볼",
    img: "homerunball.jpg",
    price: 15000,
  },
];

for (let i = 0; i < 10; i++) {
  list.innerHTML += `<li class="flex-grow-1"><div class="card" style="width: 18rem;">
  <img src="images/${productList[i].img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${productList[i].title}</h5>
    <p class="card-text">
    ${productList[i].price}
    </p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div></li>`;
}
