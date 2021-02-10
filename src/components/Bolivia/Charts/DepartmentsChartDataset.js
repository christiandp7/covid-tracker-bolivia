import React from "react";
//import moment from 'moment'

import { Line } from "react-chartjs-2";

import { lineChartBlueBg } from "../../../variables/chartOptions";

import {
  roundNumber,
  valuePerHab,
  formatDateSlash,
  getSmoothValues,
} from "../../../variables/math";

function DepartmentsChartDataset({
  timeline,
  data,
  hab,
  ponderation,
  smoothFactor,
}) {
  //console.log(smoothFactor);
  //console.log(timeline);
  //console.log(data);

  const setHorizontalEje = () => {
    return timeline.map((obj) => {
      //return moment(obj['date']).format("DD/MM/YY");
      return formatDateSlash(obj["date"]);
    });
  };

  const getValuesFromTimeline = (depId, depPopulation) => {
    if (hab === "totales") {
      return timeline.map((obj) => {
        return obj[depId];
      });
    } else {
      return timeline.map((obj) => {
        //console.log(roundNumber(valuePerHab(hab, obj[depId], depPopulation)))
        return roundNumber(valuePerHab(hab, obj[depId], depPopulation));
      });
    }
  };

  const getValueTimeline = (depId, depPopulation) => {
    const timelineValues = getValuesFromTimeline(
      depId,
      depPopulation
    ).reverse();
    if (ponderation === "diarios" && smoothFactor !== 1) {
      return getSmoothValues(timelineValues, smoothFactor);
    } else {
      return timelineValues;
    }
    return timelineValues;
  };

  const getPopulation = (depId) => {
    let dep = data.find((obj) => obj.id === depId);
    //console.log(dep.name + ': ' + dep.population)
    return dep.population;
  };

  const boliviaData = (canvas) => {
    let ctx = canvas.getContext("2d");

    //warning colors Gradient (La Paz)
    let warningGradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
    warningGradientStroke.addColorStop(1, "rgba(255,141,114,0.15)");
    warningGradientStroke.addColorStop(0.4, "rgba(255,141,114,0.0)");
    warningGradientStroke.addColorStop(0, "rgba(255,141,114,0)"); // warning

    // danger colors Gradient (Cochabamba)
    let tealGradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
    tealGradientStroke.addColorStop(1, "rgba(17,205,239, 0.15)");
    tealGradientStroke.addColorStop(0.4, "rgba(17,205,239, 0.0)");
    tealGradientStroke.addColorStop(0, "rgba(17,205,239, 0)"); // teal

    //green colors Gradient (Santa Cruz)
    let greenGradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
    greenGradientStroke.addColorStop(1, "rgba(66,134,121,0.15)");
    greenGradientStroke.addColorStop(0.4, "rgba(66,134,121,0.0)");
    greenGradientStroke.addColorStop(0, "rgba(66,134,121,0)"); // green

    //green colors Gradient (Oruro)
    let redGradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
    redGradientStroke.addColorStop(1, "rgba(245,54,92, 0.15)");
    redGradientStroke.addColorStop(0.4, "rgba(245,54,92, 0.0)");
    redGradientStroke.addColorStop(0, "rgba(245,54,92, 0)"); // red

    // danger colors Gradient (Potosí)
    let dangerGradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
    dangerGradientStroke.addColorStop(1, "rgba(253, 93, 147, 0.15)");
    dangerGradientStroke.addColorStop(0.4, "rgba(253, 93, 147, 0.0)");
    dangerGradientStroke.addColorStop(0, "rgba(253, 93, 147, 0)"); // danger

    //primary colors Gradient (Tarija)
    let yellowGradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
    yellowGradientStroke.addColorStop(1, "rgba(255, 214, 0, 0.15)");
    yellowGradientStroke.addColorStop(0.4, "rgba(255, 214, 0, 0.0)");
    yellowGradientStroke.addColorStop(0, "rgba(255, 214, 0, 0)"); //purple colors

    //warning colors Gradient (Chuquisaca)
    let orangeGradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
    orangeGradientStroke.addColorStop(1, "rgba(251, 99, 64 ,0.15)");
    orangeGradientStroke.addColorStop(0.4, "rgba(251, 99, 64, 0.0)");
    orangeGradientStroke.addColorStop(0, "rgba(251, 99, 64, 0)"); // Warning

    //blue colors Gradient (Beni)
    let pinkGradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
    pinkGradientStroke.addColorStop(1, "rgba(225, 78, 202, 0.15)");
    pinkGradientStroke.addColorStop(0.4, "rgba(225, 78, 202, 0.0)");
    pinkGradientStroke.addColorStop(0, "rgba(225, 78, 202, 0)"); // Blue

    //warning colors Gradient (Pando)
    let purpleGradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
    purpleGradientStroke.addColorStop(1, "rgba(137,101,224, 0.15)");
    purpleGradientStroke.addColorStop(0.4, "rgba(137,101,224, 0.0)");
    purpleGradientStroke.addColorStop(0, "rgba(137,101,224, 0)"); // Warning

    return {
      labels: setHorizontalEje().reverse(),
      datasets: [
        {
          label: "La Paz",
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
          data: getValueTimeline("la_paz", getPopulation("la_paz")),
        },
        {
          label: "Cochabamba",
          fill: true,
          backgroundColor: tealGradientStroke,
          borderColor: "#11cdef",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#11cdef",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#11cdef",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: getValueTimeline("cochabamba", getPopulation("cochabamba")),
          //data: [600,210,350,40,50,90]
        },
        {
          label: "Santa Cruz",
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
          data: getValueTimeline("santa_cruz", getPopulation("santa_cruz")),
          //data: [40,50,90,210,350,500,650,680,920]
        },
        {
          label: "Oruro",
          fill: true,
          backgroundColor: redGradientStroke,
          borderColor: "#f5365c",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#f5365c",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#f5365c",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: getValueTimeline("oruro", getPopulation("oruro")),
        },
        {
          label: "Potosí",
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
          data: getValueTimeline("potosi", getPopulation("potosi")),
        },
        {
          label: "Tarija",
          fill: true,
          backgroundColor: yellowGradientStroke,
          borderColor: "#ffd600",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#ffd600",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#ffd600",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: getValueTimeline("tarija", getPopulation("tarija")),
        },
        {
          label: "Chuquisaca",
          fill: true,
          backgroundColor: orangeGradientStroke,
          borderColor: "#fb6340",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#fb6340",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#fb6340",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: getValueTimeline("chuquisaca", getPopulation("chuquisaca")),
        },
        {
          label: "Beni",
          fill: true,
          backgroundColor: pinkGradientStroke,
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
          data: getValueTimeline("beni", getPopulation("beni")),
        },
        {
          label: "Pando",
          fill: true,
          backgroundColor: purpleGradientStroke,
          borderColor: "#8965e0",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#8965e0",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#8965e0",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: getValueTimeline("pando", getPopulation("pando")),
        },
      ],
    };
  };

  if (timeline) {
    return <Line data={boliviaData} options={lineChartBlueBg} />;
  }
}

export default DepartmentsChartDataset;
