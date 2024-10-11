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
  const coValueList = [];

  items.forEach(function (element, index) {
    labels.push(element.stationName);
    pm10ValueList.push(element.pm10Value);
    coValueList.push(element.coValue * 10);
  });
  const ctx = document.getElementById("myChart");

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "메세먼지",
          data: pm10ValueList,
          borderWidth: 1,
          backgroundColor: ["rgba(255, 99, 132, 0.2)"],
          borderColor: ["rgba(255, 99, 132, 1)"],
        },
        {
          label: "일산화탄소",
          data: coValueList,
          borderWidth: 1,
          backgroundColor: ["rgba(255, 159, 64, 0.2)"],
          borderColor: ["rgba(255, 159, 64, 1)"],
        },
      ],
    },
    options: {
      scales: {
        x: {
          stacked: true,
        },
        y: {
          beginAtZero: true,
          stacked: true,
        },
      },
    },
  });
}
loadData();
