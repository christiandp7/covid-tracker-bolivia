import React, { useState, useEffect } from 'react'
import TableLoader from '../../Loaders/TableLoader'


import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";


function SudamericaTable({ data }) {

  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {   
      setCountriesData(data.sort((a,b) => (a.cases < b.cases) ? 1 : -1))
      console.log(countriesData);
    }, 100);
    
  })

  /*if(!countriesData.length){
    return ( <h4>Loading...</h4> )
  }*/

  return (
    <Card>
      <CardHeader>
        <CardTitle tag="h2">Sudamerica Total</CardTitle>
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
            </tr>
          </thead>
          <tbody>

            {countriesData.length? countriesData.map((country, i) => (
                <tr key={i}>
                  <td>
                    <img className="avatar flag" src={country.countryInfo.flag} />
                    {country.country}
                  </td>
                  <td>{country.cases}</td>
                  <td>{country.active}</td>
                  <td>{country.recovered}</td>
                  <td>{country.deaths}</td>
                  <td>{country.tests}</td>
                  <td>{country.critical}</td>
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
