import React from 'react'
import { Pie } from 'react-chartjs-2'

import moment from 'moment'

// reactstrap components
import {
  Button,
  ButtonGroup,
  FormGroup,
  Input,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

import { numberWithDots } from '../../../variables/math'

import PieLoader from '../../Loaders/PieLoader'

function BoliviaTestsPie({ data: { cases, tests, updated }}) {

  let bolTestsPieOptions = {
    maintainAspectRatio: false,
    /*layout: {
      padding: {
        top: 20,
        bottom: 20
      }
    },*/
    title: {
      display: true,
      text: 'Confirmados por cantidad de Tests ',
      fontColor: "#D4D4D8",
      lineHeight: 1.4,
    },
    legend: {
      display: true,
      position: 'bottom',
      reverse: true,
      labels: {
        fontColor: "#ffffff",
        fontSize: 12,
        padding: 15,
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
      mode: "nearest",
      intersect: 0,
      position: "nearest",
      /*callbacks: {
        label: function(tooltipItem, data){
          //return data['datasets'][0]['data'][tooltipItem['index']] + '%';
          return `${data.datasets[tooltipItem.datasetIndex].label}: ${data['datasets'][0]['data'][tooltipItem['index']]}%`;
        }
      }*/
    },
  }

  let bolTestsPieData = canvas => {

    let ctx = canvas.getContext("2d");

    let blueGradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
    blueGradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
    //blueGradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
    blueGradientStroke.addColorStop(0, "rgba(29,140,248,0)"); // blue

    let greenGradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
    greenGradientStroke.addColorStop(1, "rgba(45,206,137,0.2)");
    //greenGradientStroke.addColorStop(0.4, "rgba(45,206,137,0.0)"); 
    greenGradientStroke.addColorStop(0, "rgba(45,206,137,0)"); // green

    return {
      labels: ["Confirmados", "Nro. Tests"],
      datasets: [
        {
          //backgroundColor: [ "#2ecc71", "#3498db"],
          //borderColor:	"transparent",
          backgroundColor: [greenGradientStroke, blueGradientStroke],
          hoverBackgroundColor: [greenGradientStroke, blueGradientStroke],
          borderColor: ["#2dce89", "#1d8cf8"],
          borderWidth: 2,
          data: [numberWithDots(cases), numberWithDots(tests)]
        }
      ]
    }
    
  }
  
  
  if(!tests){
    return (<PieLoader />)
  }  
  return (
    <Card className="card-chart md-chart">
      <CardHeader>
        <Row>
          <Col className="text-left" xs="12">
          <h5>Actualización: { moment(updated).format('DD/MM/YYYY - HH:MM') }</h5>
          </Col>
        </Row>
        <Row>
          <Col className="text-left" xs="12">
            <CardTitle tag="h3">
              <i className="tim-icons icon-chart-pie-36 text-info" />Tests
            </CardTitle>
          </Col>
        </Row>
      </CardHeader>
      <CardBody>
        <div className="chart-area">

          <Pie data={bolTestsPieData} options={bolTestsPieOptions} height={270} />

        </div>
      </CardBody>
    </Card>
  )
}

export default BoliviaTestsPie
