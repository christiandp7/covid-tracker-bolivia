import React, { Component } from 'react'

import classNames from "classnames";
import { Line, Bar } from "react-chartjs-2";

import { fetchBOGeneralData, fetchBOData } from '../api'

import { BoliviaCards, BoliviaCardsData, BoliviaMap } from "../components/Bolivia"

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

export class Bolivia extends Component {

  state = {
    genData: {},
  }

  async componentDidMount() {
    const fetchedBOGeneralData = await fetchBOGeneralData();
    this.setState({ genData: fetchedBOGeneralData })
  }

  

  

  render() {
    //const { genData } = this.state;
    
    return (
      <>
        <div className="content">

          <BoliviaCards data={this.state.genData} />

          <Row>
            <Col xs="12" md="8">
              <Card>
                <BoliviaMap />
              </Card>
            </Col>
            <Col xs="12" md="4">
              <BoliviaCardsData data={this.state.genData} />
            </Col>
          </Row>


          <Row>
            <Col xs="12">
              <Card className="card-chart"></Card>
            </Col>
          </Row>

        </div>
      </>
    )
  }
}

export default Bolivia
