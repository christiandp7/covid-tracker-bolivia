import React from 'react'

import { Line } from 'react-chartjs-2';

import { chartBlueBgSud } from "../../../variables/chartOptions";

import { roundNumber } from '../../../variables/math'


function SudChartDatated({ timeline, data }) {

  //console.log(timeline[0])

  const getKeyTimeline = (timelineDataType) => {
    let fechas = Object.keys(timelineDataType).map((key) => {
      return key;
    })
    return fechas;
  }
  const getValueTimeline = (timelineDataType, countryPopulation) => {
    let casos = Object.values(timelineDataType).map((value) => {
      //return value;
      //console.log(roundNumber((100000 * Number(value)) / countryPopulation))
      return roundNumber((100000 * Number(value)) / countryPopulation);
    })
    //console.log(casos)
    return casos
  }

  const getPopulation = countryName => {
    let pop = data.find(obj => obj.country.toLowerCase() == countryName.toLowerCase());
    //console.log(pop.population)
    return pop.population
  }  


  const boliviaData = (canvas) => {
    let ctx = canvas.getContext("2d");

    //blue colors Gradient (Argentina)
    let blueGradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
    blueGradientStroke.addColorStop(1, "rgba(29,140,248,0.15)");
    blueGradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
    blueGradientStroke.addColorStop(0, "rgba(29,140,248,0)"); 

    // danger colors Gradient (Bolivia)
    let dangerGradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
    dangerGradientStroke.addColorStop(1, "rgba(253, 93, 147, 0.15)");
    dangerGradientStroke.addColorStop(0.4, "rgba(253, 93, 147, 0.0)");
    dangerGradientStroke.addColorStop(0, "rgba(253, 93, 147, 0)"); //blue colors

    //green colors Gradient (Brazil)
    let greenGradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
    greenGradientStroke.addColorStop(1, "rgba(66,134,121,0.15)");
    greenGradientStroke.addColorStop(0.4, "rgba(66,134,121,0.0)"); 
    greenGradientStroke.addColorStop(0, "rgba(66,134,121,0)");

    //warning colors Gradient (Chile)
    let warningGradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
    warningGradientStroke.addColorStop(1, "rgba(255,141,114,0.15)");
    warningGradientStroke.addColorStop(0.4, "rgba(255,141,114,0.0)"); 
    warningGradientStroke.addColorStop(0, "rgba(255,141,114,0)");

    //primary colors Gradient (Perú)
    let primaryGradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
    primaryGradientStroke.addColorStop(1, "rgba(72,72,176,0.15)");
    primaryGradientStroke.addColorStop(0.4, "rgba(72,72,176,0.0)");
    primaryGradientStroke.addColorStop(0, "rgba(119,52,169,0)"); //purple colors
    
    return {
      labels: getKeyTimeline(timeline[0].timeline.cases),
      datasets: [
        {
          label: "Argentina",
          fill: true,
          backgroundColor: blueGradientStroke,
          borderColor: "#1f8ef1",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#1f8ef1",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#1f8ef1",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: getValueTimeline(timeline[0].timeline.cases, getPopulation("Argentina"))
        },
        {
          label: "Bolivia",
          fill: true,
          backgroundColor: dangerGradientStroke,
          borderColor: "#fd5d93",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#fd5d93",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#fd5d93",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: getValueTimeline(timeline[1].timeline.cases, getPopulation("Bolivia"))
        },
       {
          label: "Brazil",
          fill: true,
          backgroundColor: greenGradientStroke,
          borderColor: "#00d6b4",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#00d6b4",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#00d6b4",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: getValueTimeline(timeline[2].timeline.cases, getPopulation("Brazil"))
        },
        {
          label: "Chile",
          fill: true,
          backgroundColor: warningGradientStroke,
          borderColor: "#ff8d72",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#ff8d72",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#ff8d72",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: getValueTimeline(timeline[3].timeline.cases, getPopulation("Chile"))
        },
        {
          label: "Perú",
          fill: true,
          backgroundColor: primaryGradientStroke,
          borderColor: "#e14eca",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#e14eca",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#e14eca",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: getValueTimeline(timeline[4].timeline.cases, getPopulation("Peru"))
        }

      ]
    }
  }

  
  if(timeline[0]){
    return (
      <Line data={boliviaData} options={chartBlueBgSud} />
    )
  }
}

export default SudChartDatated
