 //line
 var ctxL = document.getElementById("lineChart").getContext('2d');
 var myLineChart = new Chart(ctxL, {
   type: 'line',
   data: {
     labels: ["2010", "2011", "2013",   "2014", "2015"],
     datasets: [
       {
         label: "Profit/Loss Percentage",
         data: [65 , 80, 80, 81, 77 ],
         backgroundColor: [
           'rgba(51, 154, 240, 0.49)',
         ],
         borderColor: [
           'rgba(51, 154, 240, 0.49) ',
         ],
         borderWidth: 2
       },
        
     ]
   },
   options: {
     responsive: true
   }
 });