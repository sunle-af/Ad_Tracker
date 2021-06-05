$(document).ready(function() {
    var ctx = $("#chart-line");
    var myLineChart = new Chart(ctx, {
        type: 'polarArea',
        
        data: {
            labels: [" ", " ", " ", " "],
            datasets: [{
                data: [1200, 1700, 800, 200],
                borderWidth:"0",
                backgroundColor: ["#339AEF", "#50CD65", "#F98F2B", "#FBFBFB"]
            }]
        },
        options: {
            title: {
                
                display: true,
                text: ''
            }
        }
    });
});