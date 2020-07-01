import React, { useState, useEffect } from 'react'
import cx from 'classnames'

import ChartLoader from '../../Loaders/ChartLoader'

// reactstrap components
import {
  FormGroup,
  Label,
  Input,
  ButtonGroup,
  Button,
  Tooltip,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

import { fetchCountriesHistoryData } from '../../../api'
import { moveEjeToDays } from '../../../variables/math'

import  SudChartDataset  from './SudChartDataset'

function SudChart({ timeline, data }) {

  const [historical, setHistorical] = useState(timeline)
  const [recordsNumber, setRecordsNumber] = useState(30)
  const [eje, setEje] = useState('fechas')

  // Tooltips
  const [tooltipEjeOpen, setTooltipEjeOpen] = useState(false);
  const [tooltipDiasOpen, setTooltipDiasOpen] = useState(false);
  const toggle1 = () => setTooltipEjeOpen(!tooltipEjeOpen);
  const toggle2 = () => setTooltipDiasOpen(!tooltipDiasOpen);


  useEffect(() => {
    const fetchAPI = async () => {
      setHistorical(await fetchCountriesHistoryData(null, recordsNumber))
    }
    fetchAPI();
    //console.log('shot')
  }, [recordsNumber])

  useEffect(() => {
    if(eje === "dias"){
      setHistorical(moveEjeToDays(historical))
      console.log("days!!!")
    } else {
      //setHistorical(timeline) // Da ERROR Arreglat Fix IT!!!
    }
  }, [eje])

  //return console.log(recordsNumber);
  //return console.log(historical);
  

  if(!timeline[0]){
    //console.log(timeline.cases); // Datos obtenidos correctamente
    return ( <ChartLoader /> )
  }  

  return (
    <Card className="card-chart sud-chart">
      <CardHeader>
        <Row>
          <Col className="text-left" sm="6" xs="8">
            {/*<h5>Últimos 30 días | Última actualización: {}</h5>*/}
            {/*<p>Últimos {recordsNumber} días</p>*/}
            <p>En valor Absoluto</p>
            <CardTitle tag="h2">
              <i className="tim-icons icon-chart-bar-32 text-Info" /> Casos Confirmados
            </CardTitle>
            <h5>Por cada 100.000 habitantes</h5>
          </Col>
          <Col sm="6" xs="4">
            <Row>
              <Col sm="6" xs="12">
              <FormGroup>
                  <Label for="select1">Eje de muestreo</Label> &nbsp; <i className="tim-icons icon-alert-circle-exc" id="tooltipEje"></i> 
                  <Tooltip placement="top" isOpen={tooltipEjeOpen} target="tooltipEje" toggle={toggle1}>
                    Cambia el eje horizontal de muestreo, entre fechas (registros por día) y cantidad de días desde el paciente 1 para cada país (comparando la cantidad de días de cada país desde el día 0).
                  </Tooltip>
                  <Input 
                    type="select" 
                    id="select1"
                    className=""
                    defaultValue={eje}
                    onChange={(e) => setEje(e.target.value)}
                  >
                    <option value="fechas">Fechas</option>
                    <option value="dias">Cantidad de días</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col sm="6" xs="12">
                <FormGroup>
                  <Label for="recordsNumerSelect">Nro. de días</Label> &nbsp; <i className="tim-icons icon-alert-circle-exc" id="tooltipDias"></i>
                  <Tooltip placement="top" isOpen={tooltipDiasOpen} target="tooltipDias" toggle={toggle2}>
                    Selecciona la cantidad de días hasta el último regitro.
                  </Tooltip>
                  <Input 
                    type="select" 
                    id="recordsNumerSelect" 
                    defaultValue={recordsNumber}
                    className=""
                    onChange={(e) => setRecordsNumber(e.target.value)}
                  >
                    <option value="7">últimos 7 días</option>
                    <option value="14">últimos 14 días</option>
                    <option value="30">últimos 30 días</option>
                    <option value="50">últimos 50 días</option>
                    <option value="100">últimos 100 días</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>
          </Col>
        </Row>
      </CardHeader>
      <CardBody>
        <div className="chart-area">

          {/*<SudChartDataset timeline={timeline} data={data} />*/}
          <SudChartDataset timeline={historical} data={data} eje={eje} />

        </div>
      </CardBody>
    </Card>
  )
}

export default SudChart
