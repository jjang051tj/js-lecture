/*
fetch(
  "https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=Wnus4QpirWGI56CfvzMWDIDHMRL%2FmEF%2FqTl9gwVNbRggLYTGPFIdwBy0L51B%2B27d5QRbLanNmIAxPwNvl7dKPA%3D%3D&returnType=json&numOfRows=300&pageNo=1&sidoName=서울"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    console.log(json);
  });
*/
async function loadData() {
  const resonse = await fetch(
    "https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=Wnus4QpirWGI56CfvzMWDIDHMRL%2FmEF%2FqTl9gwVNbRggLYTGPFIdwBy0L51B%2B27d5QRbLanNmIAxPwNvl7dKPA%3D%3D&returnType=json&numOfRows=300&pageNo=1&sidoName=서울"
  );
  const json = await resonse.json();
  //console.log(json);
  console.log(json.response.body.items);
  const items = json.response.body.items;
  const labels = [];
  const pm10ValueList = [];

  items.forEach(function (element, index) {
    labels.push(element.stationName);
    pm10ValueList.push(element.pm10Value);
  });
  const ctx = document.getElementById("myChart");

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "# of Votes",
          data: pm10ValueList,
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}
loadData();
