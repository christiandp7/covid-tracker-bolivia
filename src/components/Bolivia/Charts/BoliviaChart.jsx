import React, { useState, useEffect } from 'react'
import cx from 'classnames'

import ChartLoader from '../../Loaders/ChartLoader'

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

import  BoliviaChartDataset  from './BoliviaChartDataset'

function BoliviaChart({ data: { timeline } }) {

  const [chartDataType, setChartDataType] = useState('Confirmados')
  const [iconColor, setIconColor] = useState('text-info')

  const changeIconColor = () => {
    if(chartDataType === "Confirmados") setIconColor("text-info");
    if(chartDataType === "Recuperados") setIconColor("text-success");
    if(chartDataType === "Decesos") setIconColor("text-danger");
  }

  useEffect(() => {
    changeIconColor()
  }, [chartDataType])

  if(!timeline){
    //console.log(timeline.cases); // Datos obtenidos correctamente
    return ( <ChartLoader /> )
  }  

  return (
    <Card className="card-chart bol-chart">
      <CardHeader>
        <Row>
          <Col className="text-left" sm="6" xs="8">
            {/*<h5>Últimos 30 días | Última actualización: {}</h5>*/}
            <h5>Últimos 30 días</h5>
            <CardTitle tag="h2">
              <i className={cx("tim-icons icon-chart-bar-32",iconColor)} /> {chartDataType}
            </CardTitle>
          </Col>
          <Col sm="6" xs="4">
            <ButtonGroup
              className="btn-group-toggle float-right"
              data-toggle="buttons"
            >
              <Button
                tag="label"
                className={cx("btn-simple", {
                  active: chartDataType === "Confirmados"
                })}
                color="info"
                id="0"
                size="sm"
                onClick={() => setChartDataType("Confirmados") }
              >
                <input
                  defaultChecked
                  className="d-none"
                  name="options"
                  type="radio"
                />
                <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                  Confirmados
                </span>
                <span className="d-block d-sm-none">
                  <i className="tim-icons icon-single-02 text-info" />
                </span>
              </Button>
              <Button
                color="info"
                id="1"
                size="sm"
                tag="label"
                className={cx("btn-simple", {
                  active: chartDataType === "Recuperados"
                })}
                onClick={() => setChartDataType("Recuperados")}
              >
                <input
                  className="d-none"
                  name="options"
                  type="radio"
                />
                <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                  Recuperados
                </span>
                <span className="d-block d-sm-none">
                  <i className="tim-icons icon-single-02 text-success" />
                </span>
              </Button>
              <Button
                color="info"
                id="2"
                size="sm"
                tag="label"
                className={cx("btn-simple", {
                  active: chartDataType === "Decesos"
                })}
                onClick={() => setChartDataType("Decesos")}
              >
                <input
                  className="d-none"
                  name="options"
                  type="radio"
                />
                <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                  Decesos
                </span>
                <span className="d-block d-sm-none">
                  <i className="tim-icons icon-single-02 text-danger" />
                </span>
              </Button>
            </ButtonGroup>
          </Col>
        </Row>
      </CardHeader>
      <CardBody>
        <div className="chart-area">
          

          <BoliviaChartDataset dataType={chartDataType} timeline={timeline} />

        </div>
      </CardBody>
    </Card>
  )
}

export default BoliviaChart
