import React, { useState, useEffect } from 'react'
import cx from 'classnames'

import ChartLoader from '../../Loaders/ChartLoader'

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

import { fetchCountriesHistoryData } from '../../../api'

import  SudChartDataset  from './SudChartDataset'

function SudChart({ timeline, data }) {


  


  if(!timeline[0]){
    //console.log(timeline.cases); // Datos obtenidos correctamente
    return ( <ChartLoader /> )
  }  

  return (
    <Card className="card-chart sud-chart">
      <CardHeader>
        <Row>
          <Col className="text-left" sm="12">
            {/*<h5>Últimos 30 días | Última actualización: {}</h5>*/}
            <p>Últimos 30 días</p>
            <CardTitle tag="h2">
              <i className="tim-icons icon-chart-bar-32 text-Info" /> Comparativa de Países
            </CardTitle>
            <h5>Por cada 100.000 habitantes</h5>
          </Col>
        </Row>
      </CardHeader>
      <CardBody>
        <div className="chart-area">

          <SudChartDataset timeline={timeline} data={data} />

        </div>
      </CardBody>
    </Card>
  )
}

export default SudChart
