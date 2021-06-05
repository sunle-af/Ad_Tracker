var speedCanvas = document.getElementById("LineChart2");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var dataFirst = {
    label: "Company1",
    data: [60, 55, 60, 55, 60, 55, 60],
    lineTension: 0,
    fill: false,
    borderColor: 'rgba(51, 154, 240, 1)'
  };
   
var dataSecond = {
    label: "Company2",
    data: [70, 65, 60, 65, 70, 65, 70],
    lineTension: 0,
    fill: false,
  borderColor: 'rgba(240, 198, 51, 1)'
  };
  var dataThird = {
    label: "Company3",
    data: [40, 40, 35, 40, 40, 35, 40],
    lineTension: 0,
    fill: false,
  borderColor: 'rgba(132, 94, 247, 1)'
  };

  var dataFourth = {
    label: "Company4",
    data: [40, 35, 60, 60, 65, 50, 70],
    lineTension: 0,
    fill: false,
  borderColor: 'rgba(51, 240, 149, 1)'
  };


var speedData = {
  labels: ["0s", "10s", "20s", "30s", "40s", "50s", "60s"],
  datasets: [dataFirst, dataSecond,dataThird,dataFourth]
};

var chartOptions = {
  legend: {
    display: true,
    position: 'top',
    labels: {
      boxWidth: 80,
      fontColor: 'black'
    }
  }
};

var lineChart = new Chart(speedCanvas, {
  type: 'line',
  data: speedData,
  options: chartOptions
});