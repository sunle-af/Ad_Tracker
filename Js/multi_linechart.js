var speedCanvas = document.getElementById("speedChart");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var dataFirst = {
    label: "Cost",
    data: [60, 60, 70, 50, 75, 60, 80],
    lineTension: 0,
    fill: false,
    borderColor: 'rgba(51, 154, 240, 1)'
  };
   
var dataSecond = {
    label: "Revenue",
    data: [50, 50, 60, 60, 65, 50, 70],
    lineTension: 0,
    fill: false,
  borderColor: 'rgba(132, 94, 247, 1)'
  };

var speedData = {
  labels: ["0s", "10s", "20s", "30s", "40s", "50s", "60s"],
  datasets: [dataFirst, dataSecond]
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