import React from 'react'
import { Line } from 'react-chartjs-2';
import moment from 'moment'

import { formatDateSlash } from '../../../variables/math'

import { chartBlueBg, chartGreenBg, chartDangerBg  } from "../../../variables/chartOptions";

function BoliviaChartDataset({ timeline, dataType }) {


  const setTimelineDataType = (getDataType) => {
    if(getDataType.toLowerCase() === "confirmados"){
      return timeline.cases;
    } else if(getDataType.toLowerCase() === "recuperados") {
      return timeline.recovered;
    } else if(getDataType.toLowerCase() === "decesos"){
      return timeline.deaths;
    }
  }

  const getKeyTimeline = (timelineDataType) => {
    let fechas = Object.keys(timelineDataType).map((key) => {
      //return key;
      //return moment(key).format("DD/MM/YY")
      return formatDateSlash(key)
    })
    return fechas;
  }

  const getValueTimeline = (timelineDataType) => {
    let casos = Object.values(timelineDataType).map((value) => {
      return value;
    })
    return casos
  }
  

  const confirmedData = (canvas) => {
    let ctx = canvas.getContext("2d");

    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
    gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
    gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
    
    return {
      labels: getKeyTimeline(setTimelineDataType(dataType)),
      //labels: ["sas","sasas"],
      datasets: [
        {
          label: dataType,
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
          data: getValueTimeline(setTimelineDataType(dataType))
          //data: [55,66]
        }
      ]
    }
  }

  const recoveredData = (canvas) => {
    let ctx = canvas.getContext("2d");

    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(66,134,121,0.2)");
    gradientStroke.addColorStop(0.4, "rgba(66,134,121,0.0)"); //green colors
    gradientStroke.addColorStop(0, "rgba(66,134,121,0)"); //green colors
    
    return {
      labels: getKeyTimeline(setTimelineDataType(dataType)),
      datasets: [
        {
          label: dataType,
          fill: true,
          backgroundColor: gradientStroke,
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
          data: getValueTimeline(setTimelineDataType(dataType))
        }
      ]
    }
  }

  const deathsData = (canvas) => {
    let ctx = canvas.getContext("2d");

    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(253, 93, 147, 0.15)");
    gradientStroke.addColorStop(0.4, "rgba(253, 93, 147, 0.0)");
    gradientStroke.addColorStop(0, "rgba(253, 93, 147, 0)"); //blue colors
    
    return {
      labels: getKeyTimeline(setTimelineDataType(dataType)),
      datasets: [
        {
          label: dataType,
          fill: true,
          backgroundColor: gradientStroke,
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
          data: getValueTimeline(setTimelineDataType(dataType))
        }
      ]
    }
  }

  
  

  const setDataType = (dataToShow) => {
    if(dataToShow.toLowerCase() === "confirmados"){
      return confirmedData;
    } else if(dataToShow.toLowerCase() === "recuperados") {
      return recoveredData;
    } else if(dataToShow.toLowerCase() === "decesos"){
      return deathsData;
    }
  }

  const setBgType = (dataToShow) => {
    if(dataToShow.toLowerCase() === "confirmados"){
      return chartBlueBg;
    } else if(dataToShow.toLowerCase() === "recuperados") {
      return chartGreenBg;
    } else if(dataToShow.toLowerCase() === "decesos"){
      return chartDangerBg;
    }
  }

  return (
      <Line data={setDataType(dataType)} options={setBgType(dataType)} />
  )
}

export default BoliviaChartDataset




