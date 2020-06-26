import React, { Component } from 'react'

import classNames from "classnames";
import { Line, Bar } from "react-chartjs-2";
import { SkeletonTheme } from "react-loading-skeleton";

import { fetchBOGeneralData, fetchBOData } from '../api'

import { BoliviaCards, BoliviaCardsData, BoliviaMap, BoliviaChart } from "../components/Bolivia"

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
    //console.log(genData)
  }

  

  

  render() {
    //const { genData } = this.state;
    
    return (
      <>
        <div className="content">
        <SkeletonTheme color="#1e1e2f" highlightColor="#BFBFC5">

          <BoliviaCards data={this.state.genData} />

          <Row>
            <Col xs="12" md="6">
              <Card>
                <BoliviaMap />
              </Card>
            </Col>
            <Col xs="12" md="6">
              <BoliviaCardsData data={this.state.genData} />
            </Col>
          </Row>


          <Row>
            <Col xs="12">
              <BoliviaChart />
            </Col>
          </Row>


        </SkeletonTheme>
        </div>
      </>
    )
  }
}

export default Bolivia
