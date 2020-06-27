import React from 'react'
import { Line } from 'react-chartjs-2';

import { chartBlueStroke  } from "../../../variables/chartOptions";

function ConfirmedDataset({ timeline }) {

  let fechas = Object.keys(timeline).map((key) => {
    return key;
  })

  let casos = Object.values(timeline).map((value) => {
    return value;
  })


  const confirmedData = (canvas) => {
    let ctx = canvas.getContext("2d");

    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
    gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
    gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
    
    return {
      labels: fechas,
      datasets: [
        {
          label: "Infectados",
          fill: true,
          backgroundColor: gradientStroke,
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
          data: casos
        }
      ]
    }
  }



  return (
      <Line data={confirmedData} options={chartBlueStroke} />
  )
}

export default ConfirmedDataset




