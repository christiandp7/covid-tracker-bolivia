let barChartOptions = {
  maintainAspectRatio: false,
  legend: {
    display: false,
    position: 'bottom',
    labels: {
      fontColor: "#ffffff",
      fontSize: 14,
      padding: 25
    }
  },
  tooltips: {
    backgroundColor: "#f5f5f5",
    titleFontColor: "#333",
    bodyFontColor: "#666",
    bodySpacing: 4,
    xPadding: 12,
    mode: "nearest",
    intersect: 0,
    position: "nearest",
    callbacks: {
      label: function(tooltipItem, data){
        //return data['datasets'][0]['data'][tooltipItem['index']] + '%';
        return `${data.datasets[tooltipItem.datasetIndex].label}: ${data['datasets'][0]['data'][tooltipItem['index']]}%`;
      }
    }
  },
  responsive: true,
  scales: {
    yAxes: [
      {
        gridLines: {
          drawBorder: false,
          color: "rgba(225,78,202,0.1)",
          zeroLineColor: "transparent"
        },
        ticks: {
          /*suggestedMin: 60,
          suggestedMax: 120,*/
          padding: 20,
          fontColor: "#9e9e9e"
        }
      }
    ],
    xAxes: [
      {
        gridLines: {
          drawBorder: false,
          color: "rgba(225,78,202,0.1)",
          zeroLineColor: "transparent"
        },
        ticks: {
          padding: 20,
          fontColor: "#9e9e9e"
        }
      }
    ]
  }
};

let lineChartBlueBg = {
  maintainAspectRatio: false,
  legend: {
    display: true,
    position: 'bottom',
    labels: {
      fontColor: "#ffffff",
      fontSize: 14,
      padding: 25
    },
    onHover: function (e) {
      e.target.style.cursor = 'pointer';
    },
    onLeave: function (e) {
      e.target.style.cursor = 'default';
    }
  },
  tooltips: {
    backgroundColor: "#f5f5f5",
    titleFontColor: "#333",
    bodyFontColor: "#666",
    bodySpacing: 4,
    xPadding: 12,
    mode: "nearest",
    intersect: 0,
    position: "nearest"
  },
  responsive: true,
  scales: {
    yAxes: [
      {
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: "rgba(29,140,248,0.0)",
          zeroLineColor: "transparent"
        },
        ticks: {
          /*suggestedMin: 0,
          suggestedMax: 30,*/
          padding: 20,
          fontColor: "#9a9a9a"
        }
      }
    ],
    xAxes: [
      {
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: "rgba(29,140,248,0.1)",
          zeroLineColor: "transparent"
        },
        ticks: {
          padding: 20,
          fontColor: "#9a9a9a"
        }
      }
    ]
  }
};



module.exports = {
  barChartOptions,
  lineChartBlueBg // blue for Line
};

