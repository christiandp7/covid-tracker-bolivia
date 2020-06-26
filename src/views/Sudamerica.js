import React, { Component } from 'react'

import classNames from "classnames";
import { Line, Bar } from "react-chartjs-2";
import { SkeletonTheme } from "react-loading-skeleton";

import { fetchSudCountriesData } from '../api'

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
    countriesData: [],
  }

  async componentDidMount() {
    const fetchedSudCountriesData = await fetchSudCountriesData();
    this.setState({ countriesData: fetchedSudCountriesData })
    //console.log(this.state.countriesData)
  }


  

  

  render() {
    //const { continetData } = this.state;
    
    return (
      
      <div className="content">
        <SkeletonTheme color="#1e1e2f" highlightColor="#BFBFC5">
          

          <Row>
            <Col xs="12" md="6">
              <Card>
                {/*<SudamericaMap />*/}
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
              <SudamericaTable data={this.state.countriesData} />
            </Col>
          </Row>


        </SkeletonTheme>
      </div>
      
    )
  }
}

export default Sudamerica
