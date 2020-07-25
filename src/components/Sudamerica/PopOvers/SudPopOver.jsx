import React, { useState } from 'react'
import cx from 'classnames';
import { 
  numberWithDots,
  getLethalityRate,
  getMortalityRate,
  getRecoveredRate,
  getEffectiveLethalityRate,
  getIncidenceRate,
  BolPopoulation
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
  faSkull,
  faExclamationTriangle,
  faMicroscope,
  faHandHoldingMedical,
  faUser,
  faUserCheck,
  faUserTimes,
  faUserTag,
  faPeopleArrows
} from '@fortawesome/free-solid-svg-icons'

const SudPopOver = ({ countryTarget, data, mapa }) => {
  
  //console.log('target ' + countryTarget)
  //console.log(data)

  //console.log(data)


  const [popovertrigger, setpopovertrigger] = useState(mapa)

  const [popoverOpen, setPopoverOpen] = useState(true);
  const togglePopover = (e) => {
    //console.log(e);    
    //console.log(e.target.parentNode.parentNode.id);
    //setPopoverOpen(!popoverOpen);

    if(Object.keys(data).length !== 0){ //check if object is empty

      if(e.target.parentNode.parentNode.id === mapa){ // si se hace click en un pais
        handleActiveCountry(countryTarget)
        setpopovertrigger(countryTarget) // Setea el país como target
        if(!popoverOpen) { // si el popover estaba cerrado
          setPopoverOpen(!popoverOpen);
        }
      } else { // si se hace click afuera del mapa
        setpopovertrigger(mapa) //setea el mapa 
        setPopoverOpen(!popoverOpen); // cierra el mapa
        handleActiveCountry(countryTarget, true)
      }

    }

    
  }


  function handleActiveCountry  (countryId, clear) {
    let allCountries = document.querySelectorAll(".sudcountry");

    [].forEach.call(allCountries, function(el) { // Remueve la clase active de todos los paises
        el.classList.remove("active");
    });

    if(!clear) { // Si se hace click fuera del mapa
      let activeCountry = document.getElementById(countryId); 
      activeCountry.classList.add("active") // No es necesario comparar si esta activo
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
        placement="right-start" 
        isOpen={popoverOpen} 
        target={popovertrigger}
        toggle={togglePopover}
        className="countryPopover"
        //offset={100}
      >
        <PopoverHeader>
          <img className="avatar flag" src={data.countryInfo.flag} alt={data.country} />
          { data.country }
        </PopoverHeader>
        <PopoverBody>

        <h5>Última Actualización: { moment(data.updated).format("DD/MM/YY") }</h5>

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
                    <FontAwesomeIcon className="text-info" icon={faUser} /> {numberWithDots(data.cases)}
                  </h5>

                  <h5>Recuperados</h5>
                  <h5 className="mb15">
                  <FontAwesomeIcon className="text-success" icon={faUserCheck} /> {numberWithDots(data.recovered)}
                  </h5>
                </Col>
                <Col xs="6">
                  <h5>Activos</h5>
                  <h5 className="mb15">
                  <FontAwesomeIcon className="text-warning" icon={faUserTag} /> {numberWithDots(data.active)}
                  </h5>

                  <h5>Decesos</h5>
                  <h5 className="mb15">
                  <FontAwesomeIcon className="text-danger" icon={faUserTimes} /> {numberWithDots(data.deaths)}
                  </h5>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="poptoday">
              <Row>
                <Col xs="6">
                  <h5>Confirmados</h5>
                  <h5 className="mb15">
                    <FontAwesomeIcon className="text-info" icon={faUser} /> { updatingDataState(data) ? (<span>Actualizando...</span>) : numberWithDots(data.todayCases)}
                  </h5>

                  <h5>Recuperados</h5>
                  <h5 className="mb15">
                  <FontAwesomeIcon className="text-success" icon={faUserCheck} /> { updatingDataState(data) ? (<span>Actualizando...</span>) : numberWithDots(data.todayRecovered)}
                  </h5>
                </Col>
                <Col xs="6">
                  <h5>Activos</h5>
                  <h5 className="mb15">
                  <FontAwesomeIcon className="text-warning" icon={faUserTag} /> {numberWithDots(data.active)}
                  </h5>

                  <h5>Decesos</h5>
                  <h5 className="mb15">
                  <FontAwesomeIcon className="text-danger" icon={faUserTimes} /> { updatingDataState(data) ? (<span>Actualizando...</span>) : numberWithDots(data.todayDeaths)}
                  </h5>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="popestadistics">
              <Row>
                <Col xs="6">
                  <h5>T. de Letalidad</h5>
                  <h5>
                    <FontAwesomeIcon className="text-danger" icon={faSkullCrossbones} /> { getLethalityRate(data.deaths, data.cases) }%
                  </h5>
                  <h5>T. de Letalidad Efectiva</h5>
                  <h5>
                    <FontAwesomeIcon className="text-tertiary" icon={faSkull} /> { getEffectiveLethalityRate(data.cases, data.deaths, data.active) }%
                  </h5>
                  <h5>T. de Incidencia</h5>
                  <h5>
                    <FontAwesomeIcon className="text-purple" icon={faPeopleArrows} /> { data.country === 'Bolivia' ? getIncidenceRate(data.cases, BolPopoulation) : getIncidenceRate(data.cases, data.population) }<small>/100mil hab.</small>
                  </h5>
                </Col>
                <Col xs="6">
                <h5>T. de Mortalidad</h5>
                  <h5>
                    <FontAwesomeIcon className="text-warning" icon={faExclamationTriangle} /> { data.country === 'Bolivia' ? getMortalityRate(data.deaths, BolPopoulation) : getMortalityRate(data.deaths, data.population) }%
                  </h5>
                  <h5>T. de Recuperación</h5>
                  <h5>
                    <FontAwesomeIcon className="text-success" icon={faHandHoldingMedical} /> { getRecoveredRate(data.recovered, data.cases) }%
                  </h5>
                  <h5>Nro. Tests</h5>
                  <h5>
                    <FontAwesomeIcon className="text-info" icon={faMicroscope} /> { numberWithDots(data.tests) }
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


function updatingDataState(data) {
  if(data.todayCases === 0 && data.todayDeaths === 0 && data.todayRecovered === 0) {
    return true
  }
  return false;
}


export default SudPopOver
