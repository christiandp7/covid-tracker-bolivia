import React, { useState, useEffect } from 'react'
import cx from 'classnames'

import { fetchSudCountriesHitoryData } from '../../../api'

import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4
} from "../../../variables/charts.js";
import { chartBlueStroke } from "../../../variables/chartOptions";

function BoliviaChart({ data }) {

  const [chartData, setChartData] = useState('data1')
  const [historyData, setHistoryData] = useState(data)

  console.log(data) //Datos Obtenidos Correctamente

  /*useEffect(() => {
    const fetchApi = async () => {
      setHistoryData(await fetchSudCountriesHistoryData())
    }
    fetchApi()
    console.log(historyData);
  }, [setHistoryData])*/

  function ChangeDataSet(datasetNum){
    setChartData(datasetNum)
  }


  return (
    <Card className="card-chart">
      <CardHeader>
        <Row>
          <Col className="text-left" sm="6">
            <h5>Últimos 30 días</h5>
            <CardTitle tag="h2">
              <i className="tim-icons icon-chart-bar-32 text-info" /> Comparativa
            </CardTitle>
          </Col>
          <Col sm="6">
            <ButtonGroup
              className="btn-group-toggle float-right"
              data-toggle="buttons"
            >
              <Button
                tag="label"
                className={cx("btn-simple", {
                  active: chartData === "data1"
                })}
                color="info"
                id="0"
                size="sm"
                onClick={() => setChartData("data1")}
              >
                <input
                  defaultChecked
                  className="d-none"
                  name="options"
                  type="radio"
                />
                <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                  Infectados
                </span>
                <span className="d-block d-sm-none">
                  <i className="tim-icons icon-single-02" />
                </span>
              </Button>
              <Button
                color="info"
                id="1"
                size="sm"
                tag="label"
                className={cx("btn-simple", {
                  active: chartData === "data2"
                })}
                onClick={() => setChartData("data2")}
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
                  <i className="tim-icons icon-single-02" />
                </span>
              </Button>
              <Button
                color="info"
                id="2"
                size="sm"
                tag="label"
                className={cx("btn-simple", {
                  active: chartData === "data3"
                })}
                onClick={() => setChartData("data3")}
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
                  <i className="tim-icons icon-tap-02" />
                </span>
              </Button>
            </ButtonGroup>
          </Col>
        </Row>
      </CardHeader>
      <CardBody>
        <div className="chart-area">
          <Line
            data={chartExample1[chartData]}
            options={chartBlueStroke}
          />
        </div>
      </CardBody>
    </Card>
  )
}

export default BoliviaChart
