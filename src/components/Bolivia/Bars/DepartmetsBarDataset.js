import React from 'react'
import { Bar } from 'react-chartjs-2';

import { barChartOptions } from "variables/chartOptions.js";

import {
  getLethalityRate,
  getRecoveredRate,
  getMortalityRate,
  getEffectiveLethalityRate,
  getIncidenceRate,
  replaceDecDotByComma
} from '../../../variables/math'

//import { lineChartBlueBg } from "../../../variables/chartOptions";
import { sortTasasAsc } from '../../../helpers'

function DepartmetsBarDataset({ tasa, data, tasaName, tasaColor, depsOrder }) {

  //console.log(tasa)

  //console.log(depsOrder)
  //console.log(data[0].id + " : " + tasa)

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

  /*const getDepsNames = () => {
    return data.map(dep => {
      return dep['iso3'].toUpperCase();
    })
  }

  const getDepsValues = () => {
    return data.map(dep => {
      return getTasaType(dep,tasa);
    })
  }*/


  const generateDepsObj = () => {
    let filteredData = data.map(dep => {
      return {
        name: dep['iso3'].toUpperCase(),
        value: Number(getTasaType(dep,tasa))
      }
    })
    return sortTasasAsc(filteredData, depsOrder)
  }

  const getDepsNames = () => {
    return generateDepsObj().map(dep => {
      return dep['name'];
    })
  }

  const getDepsValues = () => {
    return generateDepsObj().map(dep => {
      return dep['value'];
    })
  }

  //console.log(generateDepsObj())

  const DepsBarData = (canvas) => {

    let ctx = canvas.getContext("2d");

    //purple colors Gradient (Incidence)
    let dynamicGradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
    dynamicGradientStroke.addColorStop(1, tasaColor.rgba('0.15'));
    dynamicGradientStroke.addColorStop(0.4, tasaColor.rgba('0.0')); 
    dynamicGradientStroke.addColorStop(0, tasaColor.rgba('0')); // purple

    return {
      labels: getDepsNames(),
      //labels: generateDepsObj()
      datasets: [
        {
          label: tasaName.toString(),
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


  }



  const changeBarCharOptions = () => {
    barChartOptions.scales.yAxes[0].gridLines.color = tasaColor.rgba('0.12');
    barChartOptions.scales.xAxes[0].gridLines.color = tasaColor.rgba('0.12');

    if(tasa === 'tm' || tasa === 'ti'){
      barChartOptions.tooltips.callbacks.label = function(tooltipItem, cdata) {
        return `${cdata.datasets[tooltipItem.datasetIndex].label}: ${replaceDecDotByComma(cdata['datasets'][0]['data'][tooltipItem['index']])}/100mil hab.`;
      };
    } else {
      barChartOptions.tooltips.callbacks.label = function(tooltipItem, cdata) {
        return `${cdata.datasets[tooltipItem.datasetIndex].label}: ${replaceDecDotByComma(cdata['datasets'][0]['data'][tooltipItem['index']])}%`;
      };
    }

    return barChartOptions;
  }

  
  if(data[0]){
    return (
      <Bar data={DepsBarData} options={changeBarCharOptions()} />
    )
  }
}

export default DepartmetsBarDataset
