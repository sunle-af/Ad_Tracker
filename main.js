  //pie
  var ctxP = document.getElementById("pieChart").getContext('2d');
  var myPieChart = new Chart(ctxP, {
    type: 'pie',
    data: {
      labels: ["Country1", "Country2", "Country3"],
      datasets: [{
        data: [300, 50, 100,],
        backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"],
        hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870" ]
      }]
    },
    options: {
      responsive: true
    }
  });