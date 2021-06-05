Chart.defaults.global.defaultFontFamily = "Lato";

var horizontalBarChart = new Chart(horizontalBarChartCanvas, {
   type: 'horizontalBar',
   data: {
      labels: ["Website visit", "Capture lead", "Qualified lead", "Sales accepted", "Oppurtunity", "Win"],
      datasets: [{
         data: [2000, 4000, 3000, 8000, 3500, 6000],
         backgroundColor: ["#339AF0", "#F88E2A", "#4FCA63", "#D9C93D", "#9013FE", "#5EE5F7" ], 
      }]
   },
   options: {
      tooltips: {
        enabled: false
      },
      responsive: true,
      legend: {
         display: false,
         position: 'bottom',
         fullWidth: true,
         labels: {
           boxWidth: 10,
           padding: 50
         }
      },
      scales: {
         yAxes: [{
           barPercentage: 0.75,
           gridLines: {
             display: true,
             drawTicks: true,
             drawOnChartArea: false
           },
           ticks: {
             fontColor: '#555759',
             fontFamily: 'Lato',
             fontSize: 11
           }
            
         }],
         xAxes: [{
             gridLines: {
               display: true,
               drawTicks: false,
               tickMarkLength: 5,
               drawBorder: false
             },
           ticks: {
             padding: 5,
             beginAtZero: true,
             fontColor: '#555759',
             fontFamily: 'Lato',
             fontSize: 11,
             callback: function(label, index, labels) {
              return label/1000;
             }
               
           },
            scaleLabel: {
              display: true,
              padding: 10,
              fontFamily: 'Lato',
              fontColor: '#555759',
              fontSize: 16,
              fontStyle: 700,
              labelString: 'Parameters'
            },
           
         }]
      }
   }
});