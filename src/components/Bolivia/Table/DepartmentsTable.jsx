import React, { useState, useEffect } from 'react'
import TableLoader from '../../Loaders/TableLoader'
//import moment from 'moment'

import { numberWithDots } from '../../../variables/math'

import ChartLoader from '../../Loaders/ChartLoader'

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
} from "reactstrap";





function DepartmentsTable({ data }) {

  //console.log(data)

  const [depsData, setDepsData] = useState([]);

  useEffect(() => {
    //const timer = setTimeout(() => {   
      setDepsData(data.sort((a,b) => (a.total.cases < b.total.cases) ? 1 : -1))
      //console.log(depsData);
    //}, 100);
    
  })


  if(!depsData.length){
    return ( <ChartLoader /> )
  }

  

  return (
    <Card>
      <CardHeader>
        <h5>Valores Totales | Última Actualización: { data[0].lastUpdate }</h5>
        <CardTitle tag="h2">Departamentos</CardTitle>
      </CardHeader>
      <CardBody>
        <Table className="tablesorter" responsive>
          <thead className="text-primary">
            <tr>
              <th>Depto.</th>
              <th>Confirmados</th>
              <th>Activos</th>
              <th>Recuperados</th>
              <th>Decesos</th>
              <th>Población</th>
            </tr>
          </thead>
          <tbody>

            {depsData.length ? depsData.map((dep, i) => (
                <tr key={i}>
                  <td className="table_cell_wide">
                    <img className="avatar flag" src={dep.flag2} />
                    
                    {dep.name }
                  </td>
                

                  <td>{numberWithDots(dep.total.cases)}</td>
                  <td>{numberWithDots(dep.total.active)}</td>
                  <td>{numberWithDots(dep.total.recovered)}</td>
                  <td>{numberWithDots(dep.total.deaths)}</td>
                  <td>{numberWithDots(dep.population)}</td>


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

export default DepartmentsTable
