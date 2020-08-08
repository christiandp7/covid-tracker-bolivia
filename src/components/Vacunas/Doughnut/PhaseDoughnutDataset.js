import React from 'react'
import { Doughnut } from 'react-chartjs-2';

function PhaseDoughnutDataset({ phases }) {

  const getArrayData = (phasesArray) => {
    return phasesArray.map(phase => {
      //console.log(phase.phase + ' : ' + phase.candidates)
      return phase.candidates;
    })
  }

  let VaccinePhaseOptions = {
    maintainAspectRatio: false,
    responsive: true,
    /*title: {
      display: true,
      text: 'Confirmados por cantidad de Tests ',
      fontColor: "#D4D4D8",
      lineHeight: 1.4,
    },*/
    legend: {
      display: true,
      position: 'left',
      //reverse: true,
      labels: {
        fontColor: "#ffffff",
        fontSize: 12,
        padding: 16,
        boxWidth: 20,
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
      mode: "point",
      intersect: 0,
      position: "nearest",
      callbacks: {
        label: function(tooltipItem, cdata){
          return `${cdata.labels[tooltipItem.index]}: ${cdata['datasets'][0]['data'][tooltipItem['index']]} candidatos`;
        }
      }
    },
  }


  let VaccinePhaseData = canvas => {

    let ctx = canvas.getContext("2d");

    let blueGradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
    blueGradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
    //blueGradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
    //blueGradientStroke.addColorStop(0, "rgba(29,140,248,0)"); // blue

    let greenGradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
    greenGradientStroke.addColorStop(1, "rgba(66,134,121,0.2)");
    //greenGradientStroke.addColorStop(0.4, "rgba(66,134,121,0.0)"); 
    //greenGradientStroke.addColorStop(0, "rgba(66,134,121,0)"); // green

    let yellowGradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
    yellowGradientStroke.addColorStop(1, "rgba(255, 214, 0, 0.2)");
    //yellowGradientStroke.addColorStop(0.4, "rgba(255, 214, 0, 0.0)");
    //yellowGradientStroke.addColorStop(0, "rgba(255, 214, 0, 0)"); //yellow

    let tealGradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
    tealGradientStroke.addColorStop(1, "rgba(17,205,239, 0.2)");
    //tealGradientStroke.addColorStop(0.4, "rgba(17,205,239, 0.0)");
    //tealGradientStroke.addColorStop(0, "rgba(17,205,239, 0)"); // teal

    let pinkGradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
    pinkGradientStroke.addColorStop(1, "rgba(225, 78, 202, 0.2)");
    //pinkGradientStroke.addColorStop(0.4, "rgba(225, 78, 202, 0.0)");
    //pinkGradientStroke.addColorStop(0, "rgba(225, 78, 202, 0)"); // Blue

    let orangeGradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
    orangeGradientStroke.addColorStop(1, "rgba(251, 99, 64 ,0.2)");
    //orangeGradientStroke.addColorStop(0.4, "rgba(251, 99, 64, 0.0)"); 
    //orangeGradientStroke.addColorStop(0, "rgba(251, 99, 64, 0)"); // Orange

    let purpleGradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
    purpleGradientStroke.addColorStop(1, "rgba(137,101,224,0.2)");
    //purpleGradientStroke.addColorStop(0.4, "rgba(255,141,114,0.0)"); 
    //purpleGradientStroke.addColorStop(0, "rgba(255,141,114,0)"); // purple

    let gradientsArray = [
      greenGradientStroke,
      yellowGradientStroke,
      tealGradientStroke,
      pinkGradientStroke,
      orangeGradientStroke,
      blueGradientStroke,
      purpleGradientStroke,
    ];

    return {
      labels: ["Fase 3", "Fase 2/3", "Fase 2", "Fase 1/2", "Fase 1", "Pre-Clinica", "Investigación temprana"],
      datasets: [
        {
          //backgroundColor: [ "#2ecc71", "#3498db"],
          //borderColor:	"transparent",
          backgroundColor: gradientsArray,
          hoverBackgroundColor: gradientsArray,
          borderColor: [
            "#00d6b4", //green
            "#ffd600", //yellow
            "#11cdef", //teal
            "#e14eca", //pink
            "#fb6340", //orange
            "#1d8cf8", //blue
            "#8965e0", //purple
          ],
          borderWidth: 2,
          //data: [cases, getSuspectsAndDiscartedSum(tests, cases)]
          data: getArrayData(phases)
        }
      ]
    }
    
  }



  return (
    <Doughnut data={VaccinePhaseData} options={VaccinePhaseOptions}  />
  )
}

export default PhaseDoughnutDataset
