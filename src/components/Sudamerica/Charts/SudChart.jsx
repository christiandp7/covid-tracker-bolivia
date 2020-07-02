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
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

import CustomTooltip from '../../Tooltip/CustomTooltip'

import { fetchCountriesHistoryData } from '../../../api'
import { moveEjeToDays } from '../../../variables/math'

import  SudChartDataset  from './SudChartDataset'

function SudChart({ timeline, data }) {

  const [historical, setHistorical] = useState(timeline)
  const [recordsNumber, setRecordsNumber] = useState(30)
  const [habNumber, setHabNumber] = useState(100000)
  const [eje, setEje] = useState('fechas')

  // Tooltips
  const [tooltipEjeOpen, setTooltipEjeOpen] = useState(false);
  const [tooltipDiasOpen, setTooltipDiasOpen] = useState(false);
  const toggle1 = () => setTooltipEjeOpen(!tooltipEjeOpen);
  const toggle2 = () => setTooltipDiasOpen(!tooltipDiasOpen);


  const fetchAPI = async () => {
    let histTemp = await fetchCountriesHistoryData(null, recordsNumber)
    //console.log("changed!")
    if(eje === "dias"){
      setHistorical(moveEjeToDays(histTemp))
    } else {
      setHistorical(histTemp)
    }
  }

  useEffect(() => {
    fetchAPI();
  }, [recordsNumber, habNumber])

  useEffect(() => {
    if(eje === "dias"){
      setHistorical(moveEjeToDays(historical))
      //console.log("days!!!")
    } else {
      fetchAPI();
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
            {/*<h5>Por cada 100.000 habitantes</h5>*/}
            <FormGroup>
              <Input 
                type="select" 
                id="recordsNumerSelect" 
                defaultValue={habNumber}
                className="width-auto"
                onChange={(e) => setHabNumber(e.target.value)}
              >
                <option value="5000">Por cada 5,000 habitantes</option>
                <option value="50000">Por cada 50,000 habitantes</option>
                <option value="100000">Por cada 100,000 habitantes</option>
                <option value="1000000">Por cada 1,000,000 habitantes</option>
                <option value="total">Valores Totales</option>
              </Input> 
            </FormGroup>
          </Col>
          <Col sm="6" xs="4">
            <Row>
              <Col sm="6" xs="12">
              <FormGroup>
                  <Label for="select1">Eje de muestreo</Label> &nbsp; <i className="tim-icons icon-alert-circle-exc" id="tooltipEje"></i> 
                  <CustomTooltip placement="top" target="tooltipEje">
                    Cambia el eje horizontal de muestreo, entre fechas (registros por día) y cantidad de días desde el paciente 1 para cada país (comparando la cantidad de días de cada país desde el día 0).
                  </CustomTooltip>
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
                  <CustomTooltip placement="top" target="tooltipDias">
                  Selecciona la cantidad de días hasta el último regitro.
                  </CustomTooltip>
                  <Input 
                    type="select" 
                    id="recordsNumerSelect" 
                    defaultValue={recordsNumber}
                    className=""
                    onChange={(e) => setRecordsNumber(e.target.value)}
                  >
                    <option value="7">últimos 7 días</option>
                    <option value="14">últimos 14 días</option>
                    <option value="21">últimos 21 días</option>
                    <option value="30">últimos 30 días</option>
                    <option value="45">últimos 45 días</option>
                    <option value="60">últimos 60 días</option>
                    <option value="90">últimos 90 días</option>
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
          <SudChartDataset 
            timeline={historical} 
            data={data} 
            eje={eje} 
            hab={habNumber} 
            recordsNum={recordsNumber}
          />

        </div>
      </CardBody>
    </Card>
  )
}

export default SudChart
