import React, { Component } from 'react'

import classNames from "classnames";
import { Line, Bar } from "react-chartjs-2";

//import { fetchContinentData } from '../api'

import { SudamericaMap, SudamericaTable } from "../components/Sudamerica"


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

export class Sudamerica extends Component {

  state = {
    continetData: {},
  }

  /*async componentDidMount() {
    const fetchedContinentData = await fetchContinentData();
    this.setState({ continetData: fetchedContinentData })
  }*/


  

  render() {
    //const { continetData } = this.state;
    
    return (
      <>
        <div className="content">

          

          <Row>
            <Col xs="12" md="6">
              <Card>
                <SudamericaMap />
              </Card>
            </Col>
            <Col xs="12" md="6">
              
            </Col>
          </Row>


          <Row>
            <Col xs="12">
              <Card className="card-chart"></Card>
            </Col>
          </Row>

          <Row>
            <Col xs="12">
              <SudamericaTable />
            </Col>
          </Row>

        </div>
      </>
    )
  }
}

export default Sudamerica
