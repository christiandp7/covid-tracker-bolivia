import React, { useState, useEffect } from 'react'
import TableLoader from '../../Loaders/TableLoader'
import moment from 'moment'

import { numberWithCommas } from '../../../variables/math'

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
} from "reactstrap";


function SudamericaTable({ data }) {

  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    //const timer = setTimeout(() => {   
      setCountriesData(data.sort((a,b) => (a.cases < b.cases) ? 1 : -1))
      //console.log(countriesData);
    //}, 100);
    
  })

  /*if(!countriesData.length){
    return ( <h4>Loading...</h4> )
  }*/

  return (
    <Card>
      <CardHeader>
        <p>Valores Totales | Última Actualización: { moment(data.lastUpdate).format("DD/MM/YY - HH:MM:SS") }</p>
        <CardTitle tag="h2">Sudamerica</CardTitle>
      </CardHeader>
      <CardBody>
        <Table className="tablesorter" responsive>
          <thead className="text-primary">
            <tr>
              <th>País</th>
              <th>Confirmados</th>
              <th>Activos</th>
              <th>Recuperados</th>
              <th>Decesos</th>
              <th>Nro. Tests</th>
              <th>Estado Crítico</th>
              <th>Población</th>
            </tr>
          </thead>
          <tbody>

            {countriesData.length? countriesData.map((country, i) => (
                <tr key={i}>
                  <td>
                    <img className="avatar flag" src={country.countryInfo.flag} />
                    {country.country}
                  </td>
                  {/*<td><CountUp start={0} end={country.cases} duration={2} separator="," /></td>
                  <td><CountUp start={0} end={country.active} duration={2} separator="," /></td>
                  <td><CountUp start={0} end={country.recovered} duration={2} separator="," /></td>
                  <td><CountUp start={0} end={country.deaths} duration={2} separator="," /></td>
                  <td><CountUp start={0} end={country.tests} duration={2} separator="," /></td>
                  <td><CountUp start={0} end={country.critical} duration={2} separator="," /></td>
            <td><CountUp start={0} end={country.population} duration={2} separator="," /></td>*/}

                  <td>{numberWithCommas(country.cases)}</td>
                  <td>{numberWithCommas(country.active)}</td>
                  <td>{numberWithCommas(country.recovered)}</td>
                  <td>{numberWithCommas(country.deaths)}</td>
                  <td>{numberWithCommas(country.tests)}</td>
                  <td>{numberWithCommas(country.critical)}</td>
                  <td>{numberWithCommas(country.population)}</td>


                </tr>
              )) :
              ( 
                <TableLoader cols={3} />         
                
              )
            }
            
          </tbody>
        </Table>
      </CardBody>
    </Card>
  )
}

export default SudamericaTable
