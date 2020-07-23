import React, { useState, useEffect } from 'react'
import cx from 'classnames';
import { 
  numberWithCommas,
  formatDate1,
  getLethalityRate,
  getRecoveredRate,
  getMortalityRate,
  getEffectiveLethalityRate,
  getIncidenceRate
 } from '../../../variables/math'

import moment from 'moment'

import { 
  Row,
  Col,
  TabContent, TabPane, Nav, NavItem, NavLink,
  Popover,
  PopoverHeader, 
  PopoverBody
 } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faSkullCrossbones,
  faExclamationTriangle,
  faMicroscope,
  faHandHoldingMedical,
  faUser,
  faUserCheck,
  faUserTimes,
  faUserTag,
  faSkull,
  faPeopleArrows,
} from '@fortawesome/free-solid-svg-icons'

const BolPopOver = ({ depTarget, data, mapa }) => {

  
  //console.log(data)

  const [popovertrigger, setpopovertrigger] = useState(mapa)

  const [popoverOpen, setPopoverOpen] = useState(true);
  const togglePopover = (e) => {

    if(Object.keys(data).length != 0){ //check if object is empty

      if(e.target.parentNode.parentNode.id === mapa){ // si se hace click en un pais
        handleActiveDep(depTarget)
        setpopovertrigger(depTarget) // Setea el país como target
        if(!popoverOpen) { // si el popover estaba cerrado
          setPopoverOpen(!popoverOpen);
        }
      } else { // si se hace click afuera del mapa
        setpopovertrigger(mapa) //setea el mapa 
        setPopoverOpen(!popoverOpen); // cierra el mapa
        handleActiveDep(depTarget, true)
      }

    }
    
  }


  function handleActiveDep  (depId, clear) {
    let AllDeps = document.querySelectorAll(".boldep");

    [].forEach.call(AllDeps, function(el) { // Remueve la clase active de todos los paises
        el.classList.remove("active");
    });

    if(!clear) { // Si se hace click fuera del mapa
      let activeDep = document.getElementById(depId); 
      activeDep.classList.add("active") // No es necesario comparar si esta activo
    }
    
  }

  const [activeTab, setActiveTab] = useState('poptotal');
  const toggleTab = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }


  if(!data) {
    return null
  }

  return (
    <div>
      <Popover 
        trigger="legacy" //focus
        placement="right-start" //right-star
        isOpen={popoverOpen} 
        target={popovertrigger}
        toggle={togglePopover}
        className="countryPopover"
        //offset={100}
      >
        <PopoverHeader>
          <img className="avatar flag" src={data.flag} />
          { data.name }
        </PopoverHeader>
        <PopoverBody>

        <h5>Última Actualización: { data.lastUpdate }</h5>

          <Nav tabs>
            <NavItem>
              <NavLink
                className={cx({ active: activeTab === 'poptotal' })}
                onClick={() => { toggleTab('poptotal'); }}
              >
                <h5>Total</h5>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={cx({ active: activeTab === 'poptoday' })}
                onClick={() => { toggleTab('poptoday'); }}
              >
                <h5>Hoy</h5>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={cx({ active: activeTab === 'popestadistics' })}
                onClick={() => { toggleTab('popestadistics'); }}
              >
                <h5>Estadísticas</h5>
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="poptotal">
              <Row>
                <Col xs="6">
                  <h5>Confirmados</h5>
                  <h5 className="mb15">
                    <FontAwesomeIcon className="text-info" icon={faUser} /> {numberWithCommas(data.total.cases)}
                  </h5>

                  <h5>Recuperados</h5>
                  <h5 className="mb15">
                  <FontAwesomeIcon className="text-success" icon={faUserCheck} /> {numberWithCommas(data.total.recovered)}
                  </h5>
                </Col>
                <Col xs="6">
                  <h5>Activos</h5>
                  <h5 className="mb15">
                  <FontAwesomeIcon className="text-warning" icon={faUserTag} /> {numberWithCommas(data.total.active)}
                  </h5>

                  <h5>Decesos</h5>
                  <h5 className="mb15">
                  <FontAwesomeIcon className="text-danger" icon={faUserTimes} /> {numberWithCommas(data.total.deaths)}
                  </h5>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="poptoday">
              <Row>
                <Col xs="6">
                  <h5>Confirmados</h5>
                  <h5 className="mb15">
                    <FontAwesomeIcon className="text-info" icon={faUser} /> {numberWithCommas(data.today.cases)}
                  </h5>

                  <h5>Recuperados</h5>
                  <h5 className="mb15">
                  <FontAwesomeIcon className="text-success" icon={faUserCheck} /> {numberWithCommas(data.today.recovered)}
                  </h5>
                </Col>
                <Col xs="6">
                  <h5>Activos</h5>
                  <h5 className="mb15">
                  <FontAwesomeIcon className="text-warning" icon={faUserTag} /> {numberWithCommas(data.total.active)}
                  </h5>

                  <h5>Decesos</h5>
                  <h5 className="mb15">
                  <FontAwesomeIcon className="text-danger" icon={faUserTimes} /> {numberWithCommas(data.today.deaths)}
                  </h5>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="popestadistics">
              <Row>
                <Col xs="6">
                  <h5>T. de Letalidad</h5>
                  <h5>
                    <FontAwesomeIcon className="text-danger" icon={faSkullCrossbones} /> { getLethalityRate(data.total.deaths, data.total.cases) }%
                  </h5>
                  <h5>T. de Letalidad Efectiva</h5>
                  <h5>
                    <FontAwesomeIcon className="text-tertiary" icon={faSkull} /> { getEffectiveLethalityRate(data.total.cases, data.total.deaths, data.total.active) }%
                  </h5>
                  <h5>T. de Incidencia</h5>
                  <h5>
                    <FontAwesomeIcon className="text-purple" icon={faPeopleArrows} /> { getIncidenceRate(data.total.cases, data.population) }<small>/100mil hab.</small>
                  </h5>
                </Col>
                <Col xs="6">
                  <h5>T. de Mortalidad</h5>
                  <h5>
                    <FontAwesomeIcon className="text-warning" icon={faExclamationTriangle} /> { getMortalityRate(data.total.deaths, data.population) }<small>/100mil hab.</small>
                  </h5>
                  <h5>T. de Recuperacion</h5>
                  <h5>
                    <FontAwesomeIcon className="text-success" icon={faHandHoldingMedical} /> { getRecoveredRate(data.total.recovered, data.total.cases) }%
                  </h5>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
          
          
        </PopoverBody>
      </Popover>
    </div>
  )
}

export default BolPopOver
