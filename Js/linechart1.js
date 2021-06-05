var speedCanvas = document.getElementById("LineChart1");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var dataFirst = {
    label: "Profit/loss percent",
    data: [60, 60, 70, 50, 75, 60, 80],
    lineTension: 0,
    backgroundColor: [
      'rgba(51, 154, 240, 0.49)',
    ],
    
    borderColor: 'rgba(51, 154, 240, 0.49)'
  };
   
 

var speedData = {
  labels: ["0s", "10s", "20s", "30s", "40s", "50s", "60s"],
  datasets: [dataFirst]
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