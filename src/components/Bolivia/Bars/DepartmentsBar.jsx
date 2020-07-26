import React, { useState, useEffect } from 'react'
import cx from 'classnames'
import moment from 'moment'

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

import DepartmentsBarDataset from './DepartmetsBarDataset'

function DepartmentsBar({ data }) {

  const [tasa, setTasa] = useState('tl')
  const [tasaName, setTasaName] = useState('Confirmados')

  const getTasaName = () => {
    if(tasa === 'tl') setTasaName('Letalidad')
    if(tasa === 'tm') setTasaName('Mortalidad')
    if(tasa === 'tr') setTasaName('Recuperación')
    if(tasa === 'tle') setTasaName('Letalidad E.')
    if(tasa === 'ti') setTasaName('Incidencia')
  }


  useEffect(() => {
    getTasaName() // change Chart Name
  }, [tasa])



  if(!data[0]){
    return ( <ChartLoader /> )
  }  

  return (
    <Card className="card-chart sud-chart">
      <CardHeader>
        <Row>
          <Col className="text-left" xs="12">
          <h5>Valores Totales | Última actualización: { data[0].date }</h5>
          </Col>
        </Row>
        <Row>
          <Col className="text-left" sm="4" xs="12">
            <CardTitle tag="h2">
              <i className="tim-icons icon-chart-bar-32 text-Info" />T. { tasaName }
            </CardTitle>
          </Col>
          <Col sm="8" xs="12">
            <ButtonGroup
              className="btn-group-toggle float-right"
              data-toggle="buttons"
            >
              <Button
                tag="label"
                className={cx("btn-simple", {
                  active: tasa === "tl"
                })}
                color="primary"
                id="0"
                size="sm"
                onClick={() => setTasa("tl") }
              >
                <input
                  defaultChecked
                  className="d-none"
                  name="options"
                  type="radio"
                />
                <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                  Letalidad
                </span>
                <span className="d-block d-sm-none">
                  <i className="tim-icons icon-single-02 text-primary" />
                </span>
              </Button>
              <Button
                color="primary"
                id="2"
                size="sm"
                tag="label"
                className={cx("btn-simple", {
                  active: tasa === "tm"
                })}
                onClick={() => setTasa("tm")}
              >
                <input
                  className="d-none"
                  name="options"
                  type="radio"
                />
                <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                  Mortalidad
                </span>
                <span className="d-block d-sm-none">
                  <i className="tim-icons icon-single-02 text-warning" />
                </span>
              </Button>
              <Button
                color="primary"
                id="2"
                size="sm"
                tag="label"
                className={cx("btn-simple", {
                  active: tasa === "tr"
                })}
                onClick={() => setTasa("tr")}
              >
                <input
                  className="d-none"
                  name="options"
                  type="radio"
                />
                <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                  Recuperación
                </span>
                <span className="d-block d-sm-none">
                  <i className="tim-icons icon-single-02 text-success" />
                </span>
              </Button>
              <Button
                color="primary"
                id="1"
                size="sm"
                tag="label"
                className={cx("btn-simple", {
                  active: tasa === "tle"
                })}
                onClick={() => setTasa("tle")}
              >
                <input
                  className="d-none"
                  name="options"
                  type="radio"
                />
                <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                  Letalidad E.
                </span>
                <span className="d-block d-sm-none">
                  <i className="tim-icons icon-single-02 text-danger" />
                </span>
              </Button>
              <Button
                color="primary"
                id="1"
                size="sm"
                tag="label"
                className={cx("btn-simple", {
                  active: tasa === "ti"
                })}
                onClick={() => setTasa("ti")}
              >
                <input
                  className="d-none"
                  name="options"
                  type="radio"
                />
                <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                  Incidencia
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

          {/*<SudChartDataset timeline={timeline} data={data} />*/}
          <DepartmentsBarDataset 
            data={data}
            tasa={tasa}
            tasaName={tasaName}
          />

        </div>
      </CardBody>
    </Card>
  )
}

export default DepartmentsBar
