import React, { useState, useEffect } from 'react'

import ChartLoader from '../../Loaders/ChartLoader'

// reactstrap components
import {
  FormGroup,
  Input,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

import DepartmentsBarDataset from './DepartmetsBarDataset'

function DepartmentsBar({ data }) {

  const tasaColorObj = {
    danger: {
      name: 'danger',
      rgba: (alpha) => {
        return `rgba(253, 93, 147, ${alpha})`;
      },
      
      hex: '#fd5d93'
    },
    warning: {
      name: 'warning',
      rgba: (alpha) => {
        return `rgba(255,141,114, ${alpha})`;
      },
      hex: '#ff8d72'
    },
    success: {
      name: 'success',
      rgba: (alpha) => {
        return `rgba(0, 242, 195, ${alpha})`;
      },
      hex: '#00f2c3'
    },
    tertiary: {
      name: 'tertiary',
      rgba: (alpha) => {
        return `rgba(225,78,202, ${alpha})`;
      },
      hex: '#e14eca'
    },
    purple: {
      name: 'purple',
      rgba: (alpha) => {
        return `rgba(137,101,224, ${alpha})`;
      },
      hex: '#8965e0'
    }
  }

  const [tasa, setTasa] = useState('tl')
  const [tasaName, setTasaName] = useState('Confirmados')
  const [tasaColor, setTasaColor] = useState(tasaColorObj.danger)

  const getTasaName = () => {
    if(tasa === 'tl') {
      setTasaName('Letalidad');
      //setTasaColor('danger');
      setTasaColor(tasaColorObj.danger)
    }
    if(tasa === 'tm') {
      setTasaName('Mortalidad');
      //setTasaColor('warning');
      setTasaColor(tasaColorObj.warning)
    }
    if(tasa === 'tr') {
      setTasaName('Recuperación');
      setTasaColor(tasaColorObj.success)
    }
    if(tasa === 'tle') {
      setTasaName('Letalidad Efectiva');
      setTasaColor(tasaColorObj.tertiary)
    }
    if(tasa === 'ti') {
      setTasaName('Incidencia');
      setTasaColor(tasaColorObj.purple)
    }
  }


  useEffect(() => {
    getTasaName() // change Chart Name
    console.log(tasaColor)
  }, [tasa])



  if(!data[0]){
    return ( <ChartLoader /> )
  }  

  return (
    <Card className="card-chart md-chart">
      <CardHeader>
        <Row>
          <Col className="text-left" xs="12">
          <h5>Valores Totales | Última actualización: { data[0].lastUpdate }</h5>
          </Col>
        </Row>
        <Row>
          <Col className="text-left" sm="6" xs="12">
            <CardTitle tag="h3">
              <i className={`tim-icons icon-chart-bar-32 text-${tasaColor.name}`} />T. { tasaName }
            </CardTitle>
          </Col>
          <Col sm="6" xs="12">
            <FormGroup>
              <Input 
                type="select" 
                id="recordsNumerSelect" 
                defaultValue={tasa}
                className="width-auto float-sm-right"
                onChange={(e) => setTasa(e.target.value)}
              >
                <option value="tl">T. Letalidad</option>
                <option value="tm">T. Mortalidad</option>
                <option value="tr">T. Recuperación</option>
                <option value="tle">T. Letalidad Efectiva</option>
                <option value="ti">T. Incidencia</option>
              </Input> 
            </FormGroup>
            
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
            tasaColor={tasaColor}
          />

        </div>
      </CardBody>
    </Card>
  )
}

export default DepartmentsBar
