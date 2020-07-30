import React from 'react'
import { Bar } from 'react-chartjs-2';

import { barChartOptions } from "variables/chartOptions.js";

import {
  getLethalityRate,
  getRecoveredRate,
  getMortalityRate,
  getEffectiveLethalityRate,
  getIncidenceRate
} from '../../../variables/math'

//import { lineChartBlueBg } from "../../../variables/chartOptions";

function DepartmetsBarDataset({ tasa, data, tasaName, tasaColor }) {

  console.log(tasa)

  console.log(data[0].id + " : " + tasa)

  const getTasaType = (depto, tasaToShow) => {
    const { cases, deaths, recovered, active } = depto.total;
    if(tasaToShow === 'tl') {
      return getLethalityRate(deaths, cases,true);
    }
    if(tasaToShow === 'tm') {
      return getMortalityRate(deaths, depto.population, true)
    }
    if(tasaToShow === 'tr') {
      return getRecoveredRate(recovered, cases, true)
    }
    if(tasaToShow === 'tle') {
      return getEffectiveLethalityRate(cases, deaths, active, true)
    }
    if(tasaToShow === 'ti') {
      return getIncidenceRate(cases, depto.population, true)
    }
  }

  const getDepsNames = () => {
    return data.map(dep => {
      return dep['iso3'].toUpperCase();
    })
  }

  const getDepsValues = () => {
    return data.map(dep => {
      return getTasaType(dep,tasa);
    })
  }


  const DepsBarData = (canvas) => {

    let ctx = canvas.getContext("2d");

    // danger colors Gradient (Lethality)
    let dangerGradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
    dangerGradientStroke.addColorStop(1, "rgba(253, 93, 147, 0.15)");
    dangerGradientStroke.addColorStop(0.4, "rgba(253, 93, 147, 0.0)");
    dangerGradientStroke.addColorStop(0, "rgba(253, 93, 147, 0)"); // danger

    //warning colors Gradient (Mortality)
    let warningGradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
    warningGradientStroke.addColorStop(1, "rgba(255,141,114,0.15)");
    warningGradientStroke.addColorStop(0.4, "rgba(255,141,114,0.0)"); 
    warningGradientStroke.addColorStop(0, "rgba(255,141,114,0)"); // warning

    //success colors Gradient (Recover)
    let greenGradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
    greenGradientStroke.addColorStop(1, "rgba(66,134,121,0.15)");
    greenGradientStroke.addColorStop(0.4, "rgba(66,134,121,0.0)"); 
    greenGradientStroke.addColorStop(0, "rgba(66,134,121,0)"); // success

    //tertiary colors Gradient (TLE)
    let tertiaryGradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
    tertiaryGradientStroke.addColorStop(1, "rgba(72,72,176,0.15)");
    tertiaryGradientStroke.addColorStop(0.4, "rgba(72,72,176,0.0)");
    tertiaryGradientStroke.addColorStop(0, "rgba(119,52,169,0)"); //purple colors

    //purple colors Gradient (Incidence)
    let purpleGradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
    purpleGradientStroke.addColorStop(1, "rgba(137,101,224, 0.15)");
    purpleGradientStroke.addColorStop(0.4, "rgba(137,101,224, 0.0)"); 
    purpleGradientStroke.addColorStop(0, "rgba(137,101,224, 0)"); // purple


    //purple colors Gradient (Incidence)
    let dynamicGradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
    dynamicGradientStroke.addColorStop(1, tasaColor.rgba('0.15'));
    dynamicGradientStroke.addColorStop(0.4, tasaColor.rgba('0.0')); 
    dynamicGradientStroke.addColorStop(0, tasaColor.rgba('0')); // purple

    return {
      labels: getDepsNames(),
      datasets: [
        {
          label: "Confirmados",
          fill: true,
          backgroundColor: dynamicGradientStroke,
          hoverBackgroundColor: dynamicGradientStroke,
          borderColor: tasaColor.hex,
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          data: getDepsValues()
        }
      ]
    };

    //warning colors Gradient (La Paz)
    /*let warningGradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
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
    */

    /*return {
      labels: [tasaName],
      datasets: [
        {
          label: "La Paz",
          fill: true,
          backgroundColor: warningGradientStroke,
          hoverBackgroundColor: warningGradientStroke,
          borderColor: "#ff8d72",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          data: getTasaType(data[0], tasa) // La Paz
        },
        {
          label: "Cochabamba",
          fill: true,
          backgroundColor: tealGradientStroke,
          hoverBackgroundColor: tealGradientStroke,
          borderColor: "#11cdef",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          data: getTasaType(data[1], tasa) // Cochabamba
          //data: [600,210,350,40,50,90]
        },
       {
          label: "Santa Cruz",
          fill: true,
          backgroundColor: greenGradientStroke,
          hoverBackgroundColor: greenGradientStroke,
          borderColor: "#00d6b4",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          data: getTasaType(data[2], tasa) //Santa Cruz
          //data: [40,50,90,210,350,500,650,680,920]
        },
        {
          label: "Oruro",
          fill: true,
          backgroundColor: redGradientStroke,
          hoverBackgroundColor: redGradientStroke,
          borderColor: "#f5365c",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          data: getTasaType(data[3], tasa) //Oruro
        },
        {
          label: "Potosí",
          fill: true,
          backgroundColor: dangerGradientStroke,
          hoverBackgroundColor: dangerGradientStroke,
          borderColor: "#fd5d93",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          data: getTasaType(data[4], tasa) // Potosi
        },
        {
          label: "Tarija",
          fill: true,
          backgroundColor: yellowGradientStroke,
          hoverBackgroundColor: yellowGradientStroke,
          borderColor: "#ffd600",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          data: getTasaType(data[5], tasa) // Tarija
        },
        {
          label: "Chuquisaca",
          fill: true,
          backgroundColor: orangeGradientStroke,
          hoverBackgroundColor: orangeGradientStroke,
          borderColor: "#fb6340",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          data: getTasaType(data[6], tasa) // Chuquisaca
        },
        {
          label: "Beni",
          fill: true,
          backgroundColor: pinkGradientStroke,
          hoverBackgroundColor: pinkGradientStroke,
          borderColor: "#e14eca",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          data: getTasaType(data[7], tasa) // Beni
        },
        {
          label: "Pando",
          fill: true,
          backgroundColor: purpleGradientStroke,
          hoverBackgroundColor: purpleGradientStroke,
          borderColor: "#8965e0",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          data: getTasaType(data[8], tasa) // Pando
        }
      ]
    };*/


  }



  const chageBarCharOptions = () => {
    barChartOptions.scales.yAxes[0].gridLines.color = tasaColor.rgba('0.12');
    barChartOptions.scales.xAxes[0].gridLines.color = tasaColor.rgba('0.12');
    return barChartOptions;
  }

  
  if(data[0]){
    return (
      <Bar data={DepsBarData} options={chageBarCharOptions()} />
    )
  }
}

export default DepartmetsBarDataset
