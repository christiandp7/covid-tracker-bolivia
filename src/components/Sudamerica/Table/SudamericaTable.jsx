import React, { useState, useEffect } from 'react'
import TableLoader from '../../Loaders/TableLoader'
import moment from 'moment'

import { numberWithDots } from '../../../variables/math'

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
        <h5>Valores Totales | Última Actualización: { moment(data.lastUpdate).format("DD/MM/YYYY - HH:MM") }</h5>
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
              <th>Población</th>
            </tr>
          </thead>
          <tbody>

            {countriesData.length? countriesData.map((country, i) => (
                <tr key={i}>
                  <td>
                    <img className="avatar flag" src={country.country.indexOf("Malvinas") !== -1 ? "https://disease.sh/assets/img/flags/ar.png" : country.countryInfo.flag} />
                    
                    {country.country.indexOf("Malvinas") !== -1 ? "Islas Malvinas" : country.country }
                  </td>
                  {/*<td><CountUp start={0} end={country.cases} duration={2} separator="," /></td>
                  <td><CountUp start={0} end={country.active} duration={2} separator="," /></td>
                  <td><CountUp start={0} end={country.recovered} duration={2} separator="," /></td>
                  <td><CountUp start={0} end={country.deaths} duration={2} separator="," /></td>
                  <td><CountUp start={0} end={country.tests} duration={2} separator="," /></td>
                  <td><CountUp start={0} end={country.critical} duration={2} separator="," /></td>
            <td><CountUp start={0} end={country.population} duration={2} separator="," /></td>*/}

                  <td>{numberWithDots(country.cases)}</td>
                  <td>{numberWithDots(country.active)}</td>
                  <td>{numberWithDots(country.recovered)}</td>
                  <td>{numberWithDots(country.deaths)}</td>
                  <td>{numberWithDots(country.tests)}</td>
                  <td>{numberWithDots(country.population)}</td>


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
