import React, { useState, useEffect } from "react";
import cx from "classnames";

import ChartLoader from "../../Loaders/ChartLoader";

//import { formatDateSlash } from '../../../variables/math'

// reactstrap components
import {
  FormGroup,
  Label,
  Input,
  ButtonGroup,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardFooter,
  Row,
  Col,
} from "reactstrap";

import CustomTooltip from "../../Tooltip/CustomTooltip";

import {
  fetchDepartmentsStatus,
  fetchDepartmentsDailyStatus,
} from "../../../api";

import DepartmentsChartDataset from "./DepartmentsChartDataset";

function DepartmentsChart({ timeline, data }) {
  const [historical, setHistorical] = useState(timeline);
  const [status, setStatus] = useState("cases");
  const [statusName, setStatusName] = useState("Confirmados");
  const [recordsNumber, setRecordsNumber] = useState(30);
  const [habNumber, setHabNumber] = useState(100000); // 100 mil
  const [ponderation, setPonderation] = useState("acumulados");
  const [smoothFactor, setSmoothFactor] = useState(1);
  //const [habNumber, setHabNumber] = useState(100000)

  const fetchStatus = async () => {
    if (ponderation === "acumulados") {
      let histTemp = await fetchDepartmentsStatus(status, recordsNumber);
      setHistorical(histTemp);
    } else {
      let histTemp = await fetchDepartmentsDailyStatus(status, recordsNumber);
      setHistorical(histTemp);
    }
  };

  const getStatusName = () => {
    if (status === "cases") setStatusName("Confirmados");
    if (status === "active") setStatusName("Activos");
    if (status === "deaths") setStatusName("Decesos");
    if (status === "recovered") setStatusName("Recuperados");
  };

  useEffect(() => {
    //setSmoothFactor(1);
    getStatusName(); // change Chart Name
    fetchStatus();
  }, [status, recordsNumber, ponderation]);

  if (!timeline[0] || !data[0]) {
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
              {data[0].lastUpdate}
            </h5>
          </Col>
        </Row>
        <Row>
          <Col md="6" sm="12">
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
              <Button
                color="primary"
                id="2"
                size="sm"
                tag="label"
                className={cx("btn-simple", {
                  active: status === "active",
                })}
                onClick={() => setStatus("active")}
              >
                <input className="d-none" name="options" type="radio" />
                <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                  Activos
                </span>
                <span className="d-block d-sm-none">
                  <i className="tim-icons icon-single-02 text-warning" />
                </span>
              </Button>
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
                <option value="totales">Valores Totales</option>
              </Input>
            </FormGroup>
          </Col>
          <Col sm="6" xs="12">
            <Row>
              <Col sm="6" xs="12">
                <FormGroup>
                  <Label for="select1">Serie</Label> &nbsp;{" "}
                  <i
                    className="tim-icons icon-alert-circle-exc"
                    id="tooltipSerie"
                  ></i>
                  <CustomTooltip placement="top" target="tooltipSerie">
                    Cambia la serie de datos entre diarios y acumulados.
                  </CustomTooltip>
                  <Input
                    type="select"
                    id="select1"
                    className=""
                    defaultValue={ponderation}
                    onChange={(e) => setPonderation(e.target.value)}
                  >
                    <option value="acumulados">Acumulados</option>
                    <option value="diarios">Diarios</option>
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
          <DepartmentsChartDataset
            timeline={historical}
            data={data}
            hab={habNumber}
            ponderation={ponderation}
            smoothFactor={smoothFactor}
            /*recordsNum={recordsNumber}
            eje={eje} */
          />
        </div>
      </CardBody>
      <CardFooter>
        <Row>
          <Col xs="6">
            {ponderation === "diarios" && (
              <FormGroup>
                <Label for="selectSmoothFactor">Suavizar Curva</Label> &nbsp;{" "}
                <i
                  className="tim-icons icon-alert-circle-exc"
                  id="tooltipSmoothFactor"
                ></i>
                <CustomTooltip placement="top" target="tooltipSmoothFactor">
                  Suaviza los picos de la curva con valores medios para rango de
                  N*2+1 días, con pívot central en el dato diario.
                </CustomTooltip>
                <Input
                  type="select"
                  id="selectSmoothFactor"
                  className="width-auto"
                  defaultValue={smoothFactor}
                  onChange={(e) => setSmoothFactor(e.target.value)}
                >
                  <option value="1">Sin Suavizar</option>
                  <option value="2">N=2</option>
                  <option value="3">N=3</option>
                  <option value="4">N=4</option>
                  <option value="5">N=5</option>
                  <option value="6">N=6</option>
                </Input>
              </FormGroup>
            )}
          </Col>
          <Col xs="6"></Col>
        </Row>
      </CardFooter>
    </Card>
  );
}

export default DepartmentsChart;
