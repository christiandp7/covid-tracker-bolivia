import React, { useState, useEffect } from "react";
import cx from "classnames";
import moment from "moment";

import ChartLoader from "../../Loaders/ChartLoader";

// reactstrap components
import {
  Container,
  CustomInput,
  FormGroup,
  Label,
  Input,
  ButtonGroup,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Popover,
  PopoverHeader,
  PopoverBody,
} from "reactstrap";

import CustomTooltip from "../../Tooltip/CustomTooltip";

import { fetchCountriesHistoryData } from "../../../api";
import { moveEjeToDays } from "../../../variables/math";

import SudChartDataset from "./SudChartDataset";

function SudChart({ timeline, data }) {
  const [historical, setHistorical] = useState(timeline);
  const [status, setStatus] = useState("cases");
  const [statusName, setStatusName] = useState("Confirmados");
  const [recordsNumber, setRecordsNumber] = useState(30);
  const [habNumber, setHabNumber] = useState(1000000);
  const [eje, setEje] = useState("fechas");

  const getStatusName = () => {
    if (status === "cases") setStatusName("Confirmados");
    if (status === "active") setStatusName("Activos");
    if (status === "deaths") setStatusName("Decesos");
    if (status === "recovered") setStatusName("Recuperados");
  };

  const fetchAPI = async () => {
    let histTemp = await fetchCountriesHistoryData(null, recordsNumber);
    //console.log("changed!")
    if (eje === "dias") {
      setHistorical(moveEjeToDays(histTemp, status));
    } else {
      setHistorical(histTemp);
    }
  };

  useEffect(() => {
    getStatusName();
  }, [status]);

  useEffect(() => {
    fetchAPI();
  }, [recordsNumber, habNumber, status]);

  useEffect(() => {
    if (eje === "dias") {
      setHistorical(moveEjeToDays(historical, status));
      //console.log("days!!!")
    } else {
      fetchAPI();
    }
  }, [eje]);

  //return console.log(recordsNumber);
  //return console.log(historical);

  // Popover
  /*const [popoverOpen, setPopoverOpen] = useState(false);
  const toggle = () => setPopoverOpen(!popoverOpen);*/

  if (!timeline[0]) {
    //console.log(timeline.cases); // Datos obtenidos correctamente
    return <ChartLoader />;
  }

  return (
    <Card className="card-chart lg-chart">
      <CardHeader>
        <Row>
          <Col className="text-left" xs="12">
            <h5>
              Últimos {recordsNumber} días | Última actualización:{" "}
              {moment(timeline[0].lastUpdate).format("DD/MM/YYYY - hh:mma")}
            </h5>
          </Col>
        </Row>
        <Row>
          <Col className="text-left" md="6" sm="12">
            <CardTitle tag="h2">
              <i className="tim-icons icon-chart-bar-32 text-Info" />{" "}
              {statusName}
            </CardTitle>
          </Col>
          <Col md="6" sm="12">
            <ButtonGroup
              className="btn-group-toggle float-md-right"
              data-toggle="buttons"
            >
              <Button
                tag="label"
                className={cx("btn-simple", {
                  active: status === "cases",
                })}
                color="primary"
                id="0"
                size="sm"
                onClick={() => setStatus("cases")}
              >
                <input
                  defaultChecked
                  className="d-none"
                  name="options"
                  type="radio"
                />
                <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                  Confirmados
                </span>
                <span className="d-block d-sm-none">
                  <i className="tim-icons icon-single-02 text-primary" />
                </span>
              </Button>
              {/*<Button
                color="primary"
                id="2"
                size="sm"
                tag="label"
                className={cx("btn-simple", {
                  active: status === "active"
                })}
                onClick={() => setStatus("active")}
              >
                <input
                  className="d-none"
                  name="options"
                  type="radio"
                />
                <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                  Activos
                </span>
                <span className="d-block d-sm-none">
                  <i className="tim-icons icon-single-02 text-warning" />
                </span>
              </Button>*/}
              <Button
                color="primary"
                id="2"
                size="sm"
                tag="label"
                className={cx("btn-simple", {
                  active: status === "recovered",
                })}
                onClick={() => setStatus("recovered")}
              >
                <input className="d-none" name="options" type="radio" />
                <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                  Recuperados
                </span>
                <span className="d-block d-sm-none">
                  <i className="tim-icons icon-single-02 text-success" />
                </span>
              </Button>
              <Button
                color="primary"
                id="1"
                size="sm"
                tag="label"
                className={cx("btn-simple", {
                  active: status === "deaths",
                })}
                onClick={() => setStatus("deaths")}
              >
                <input className="d-none" name="options" type="radio" />
                <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                  Decesos
                </span>
                <span className="d-block d-sm-none">
                  <i className="tim-icons icon-single-02 text-danger" />
                </span>
              </Button>
            </ButtonGroup>
          </Col>
        </Row>
        <Row>
          <Col sm="6" xs="12">
            {/*<h5>Por cada 100.000 habitantes</h5>*/}
            <FormGroup>
              <Label for="recordsNumerSelect">Ponderación</Label> &nbsp;{" "}
              <i
                className="tim-icons icon-alert-circle-exc"
                id="tooltipPond"
              ></i>
              <CustomTooltip placement="top" target="tooltipPond">
                Selecciona La ponderación para cada valor de la serie.
              </CustomTooltip>
              <Input
                type="select"
                id="recordsNumerSelect"
                defaultValue={habNumber}
                className="width-auto"
                onChange={(e) => setHabNumber(e.target.value)}
              >
                <option value="50000">Por cada 50.000 habitantes</option>
                <option value="100000">Por cada 100.000 habitantes</option>
                <option value="1000000">Por cada 1.000.000 habitantes</option>
                <option value="acumulados">Total Acumulados</option>
                <option value="diarios">Total Diarios</option>
              </Input>
            </FormGroup>
          </Col>
          <Col md="6" sm="12">
            <Row>
              <Col sm="6" xs="12">
                <FormGroup>
                  <Label for="select1">Eje de muestreo</Label> &nbsp;{" "}
                  <i
                    className="tim-icons icon-alert-circle-exc"
                    id="tooltipEje"
                  ></i>
                  <CustomTooltip placement="top" target="tooltipEje">
                    Cambia el eje horizontal de muestreo, entre fechas
                    (registros por día) y cantidad de días desde el paciente 1
                    para cada país (comparando la cantidad de días de cada país
                    desde el día 0).
                  </CustomTooltip>
                  <Input
                    type="select"
                    id="select1"
                    className=""
                    defaultValue={eje}
                    onChange={(e) => setEje(e.target.value)}
                  >
                    <option value="fechas">Fechas</option>
                    <option value="dias">Cantidad de días</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col sm="6" xs="12">
                <FormGroup>
                  <Label for="recordsNumerSelect">Rango</Label> &nbsp;{" "}
                  <i
                    className="tim-icons icon-alert-circle-exc"
                    id="tooltipDias"
                  ></i>
                  <CustomTooltip placement="top" target="tooltipDias">
                    Selecciona el rango de días para la serie de dato.
                  </CustomTooltip>
                  <Input
                    type="select"
                    id="recordsNumerSelect"
                    defaultValue={recordsNumber}
                    className=""
                    onChange={(e) => setRecordsNumber(e.target.value)}
                  >
                    <option value="7">últimos 7 días</option>
                    <option value="14">últimos 14 días</option>
                    <option value="21">últimos 21 días</option>
                    <option value="30">últimos 30 días</option>
                    <option value="45">últimos 45 días</option>
                    <option value="60">últimos 60 días</option>
                    <option value="90">últimos 90 días</option>
                    <option value="120">últimos 120 días</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>
          </Col>
        </Row>
      </CardHeader>
      <CardBody>
        <div className="chart-area">
          {/*<SudChartDataset timeline={timeline} data={data} />*/}
          <SudChartDataset
            timeline={historical}
            data={data}
            status={status}
            eje={eje}
            hab={habNumber}
            recordsNum={recordsNumber}
          />
        </div>

        {/*<Container>
          <Row>
            <Col sm="6" xs="12">
              <hr />
              <Button color="primary" size="sm" id="selCountriesPopover">Seleccionar Países</Button>
            </Col>
          </Row>
        </Container>
        
        <Popover 
          trigger="legacy"
          placement="top-start" 
          isOpen={popoverOpen} 
          target="selCountriesPopover" 
          toggle={toggle}
        >
          <PopoverHeader>Países</PopoverHeader>
          <PopoverBody>
            <Row>
              <Col xs="6">
                <FormGroup>                  
                  <CustomInput type="switch" id="exampleCustomSwitch2" name="customSwitch2" label="Bolivia" />
                  <CustomInput type="switch" id="exampleCustomSwitch3" name="customSwitch3" label="Brazil" />
                  <CustomInput type="switch" id="exampleCustomSwitch4" name="customSwitch4" label="Chile" />
                </FormGroup>
              </Col>
              <Col xs="6">
                <FormGroup>
                  <CustomInput type="switch" id="exampleCustomSwitch5" name="customSwitch5" label="Ecuador" />
                  <CustomInput type="switch" id="exampleCustomSwitch6" name="customSwitch6" label="Uruguay" />
                  <CustomInput type="switch" id="exampleCustomSwitch7" name="customSwitch7" label="Paraguay" />
                  <CustomInput type="switch" id="exampleCustomSwitch8" name="customSwitch8" label="Colombia" />
                </FormGroup>
              </Col>
            </Row>
          </PopoverBody>
        </Popover>*/}
      </CardBody>
    </Card>
  );
}

export default SudChart;
