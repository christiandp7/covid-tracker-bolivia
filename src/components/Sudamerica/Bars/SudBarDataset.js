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

function DepartmetsBarDataset({ tasa, data, tasaName, tasaColor }) {


  const getTasaType = (country, tasaToShow) => {
    const { cases, deaths, recovered, active } = country;
    if(tasaToShow === 'tl') {
      return getLethalityRate(deaths, cases,true);
    }
    if(tasaToShow === 'tm') {
      return getMortalityRate(deaths, country.population, true)
    }
    if(tasaToShow === 'tr') {
      return getRecoveredRate(recovered, cases, true)
    }
    if(tasaToShow === 'tle') {
      return getEffectiveLethalityRate(cases, deaths, active, true)
    }
    if(tasaToShow === 'ti') {
      return getIncidenceRate(cases, country.population, true)
    }
  }

  const getCountriesNames = (data) => {
    return data.map(country => {
      return country['countryInfo']['iso3'].toUpperCase();
    })
  }

  const getCountriesValues = (data) => {
    return data.map(country => {
      return getTasaType(country,tasa);
    })
  }


  const filterCountries = (data) => {
    //console.log(data);
    data = data.filter(country => country['countryInfo']['iso3'] != 'SUR')
    data = data.filter(country => country['countryInfo']['iso3'] != 'GUF')
    data = data.filter(country => country['countryInfo']['iso3'] != 'GUY')
    return data;
    /*return data.map(country => {
      console.log(country)
      let iso3 = country['countryInfo']['iso3'];
      if(iso3 != "SUR" || iso3 != "GUF" || iso3 != "GUY") {
        return country;
      } 
      return country
    });*/
    //return data;
  }


  const DepsBarData = (canvas) => {

    let ctx = canvas.getContext("2d");

    //purple colors Gradient (Incidence)
    let dynamicGradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
    dynamicGradientStroke.addColorStop(1, tasaColor.rgba('0.15'));
    dynamicGradientStroke.addColorStop(0.4, tasaColor.rgba('0.0')); 
    dynamicGradientStroke.addColorStop(0, tasaColor.rgba('0')); // purple

    return {
      labels: getCountriesNames(filterCountries(data)),
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
          data: getCountriesValues(filterCountries(data))
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
