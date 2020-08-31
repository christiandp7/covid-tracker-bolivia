import React, { useState, useEffect } from 'react'
import cx from 'classnames'
import moment from 'moment'
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
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import SudBarDataset from './SudBarDataset'
import { sortCountriesData } from '../../../helpers'

function SudBar({ data }) {

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
    //console.log(tasaColor)
  }, [tasa])



  // Sort
  const [countriesOrder, setCountriesOrder] = useState('')
  const changeCountriesOrder = (e, sorter) => {
    e.preventDefault()
    setCountriesOrder(sorter);
  }

  if(!data[0]){
    return ( <ChartLoader /> )
  }  

  return (
    <Card className="card-chart md-chart">
      <CardHeader>
        <Row>
          <Col className="text-left" xs="12">
          <h5>Valores Totales | Última actualización: { moment(data[0].updated).format("DD/MM/YYYY - hh:mma") }
            <UncontrolledDropdown className="float-right" >
                <DropdownToggle
                  caret
                  className="btn-icon"
                  color="link"
                  data-toggle="dropdown"
                  type="button"
                >
                  <i className="tim-icons icon-settings-gear-63" />
                </DropdownToggle>
                <DropdownMenu aria-labelledby="dropdownMenuLink" right>
                  <DropdownItem
                    href="#"
                    className={cx({
                      "font-weight-bold": countriesOrder === "val"
                    })}
                    onClick={e => changeCountriesOrder(e, 'val')}
                  >
                    Ordenar por valores
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem
                    href="#"
                    className={cx({
                      "font-weight-bold": countriesOrder === "population"
                    })}
                    onClick={e => changeCountriesOrder(e, 'population')}
                  >
                    Ordenar por población
                  </DropdownItem>
                  <DropdownItem
                    href="#"
                    className={cx({
                      "font-weight-bold": countriesOrder === "cases"
                    })}
                    onClick={e => changeCountriesOrder(e, 'cases')}
                  >
                    Ordenar por casos confirmados
                  </DropdownItem>
                  <DropdownItem
                    href="#"
                    className={cx({
                      "font-weight-bold": countriesOrder === "deaths"
                    })}
                    onClick={e => changeCountriesOrder(e, 'deaths')}
                  >
                    Ordenar por decesos
                  </DropdownItem>
                  <DropdownItem
                    href="#"
                    className={cx({
                      "font-weight-bold": countriesOrder === "recovered"
                    })}
                    onClick={e => changeCountriesOrder(e, 'recovered')}
                  >
                    Ordenar por casos recuperados
                  </DropdownItem>
                  <DropdownItem
                    href="#"
                    className={cx({
                      "font-weight-bold": countriesOrder === "active"
                    })}
                    onClick={e => changeCountriesOrder(e, 'active')}
                  >
                    Ordenar por casos activos
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
          </h5>
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

          <SudBarDataset 
            data={sortCountriesData(data, countriesOrder)}
            tasa={tasa}
            countriesOrder={countriesOrder}
            tasaName={tasaName}
            tasaColor={tasaColor}
          />

        </div>
      </CardBody>
    </Card>
  )
}

export default SudBar
