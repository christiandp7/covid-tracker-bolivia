import React, { useState } from 'react'
import cx from 'classnames';
import { numberWithCommas } from '../../../variables/math'

import moment from 'moment'

import { 
  Row,
  Col,
  TabContent, TabPane, Nav, NavItem, NavLink,
  Popover,
  UncontrolledPopover, 
  PopoverHeader, 
  PopoverBody
 } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faSkullCrossbones,
  faProcedures,
  faMicroscope,
  faHandHoldingMedical,
  faUser,
  faUserCheck,
  faUserTimes,
  faUserTag,
} from '@fortawesome/free-solid-svg-icons'

const SudPopOver = ({ countryTarget, data, mapa }) => {
  
  //console.log('target ' + countryTarget)
  //console.log(data)

  const [popoverOpen, setPopoverOpen] = useState(false);
  const togglePopover = (e) => {
    //console.log(e);    
    //console.log(e.target.parentNode.parentNode.id);
    //setPopoverOpen(!popoverOpen);

    if(e.target.parentNode.parentNode.id === mapa){
      if(!popoverOpen) {
        setPopoverOpen(!popoverOpen);
      } 
    } else {
      setPopoverOpen(!popoverOpen);
    }

    
  }

  const [activeTab, setActiveTab] = useState('poptotal');
  const toggleTab = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  
  return (
    <div>
      <Popover 
        trigger="legacy" //focus
        placement="right-start" 
        isOpen={popoverOpen} 
        target={mapa}
        toggle={togglePopover}
        className="countryPopover"
        //offset={100}
      >
        <PopoverHeader>
          <img className="avatar flag" src={data.flag} />
          { data.name }
        </PopoverHeader>
        <PopoverBody>

        <h5>Última Actualización: { moment(data.lastUpdate).format("DD/MM/YY") }</h5>

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
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="poptotal">
              <Row>
                <Col md="6">
                  <h5>Confirmados</h5>
                  <h5 className="mb15">
                    <FontAwesomeIcon className="text-info" icon={faUser} /> {numberWithCommas(data.cases)}
                  </h5>

                  <h5>Recuperados</h5>
                  <h5 className="mb15">
                  <FontAwesomeIcon className="text-success" icon={faUserCheck} /> {numberWithCommas(data.recovered)}
                  </h5>
                </Col>
                <Col md="6">
                  <h5>Activos</h5>
                  <h5 className="mb15">
                  <FontAwesomeIcon className="text-warning" icon={faUserTag} /> {numberWithCommas(data.active)}
                  </h5>

                  <h5>Decesos</h5>
                  <h5 className="mb15">
                  <FontAwesomeIcon className="text-danger" icon={faUserTimes} /> {numberWithCommas(data.deaths)}
                  </h5>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="poptoday">
              <Row>
                <Col md="6">
                  <h5>Confirmados</h5>
                  <h5 className="mb15">
                    <FontAwesomeIcon className="text-info" icon={faUser} /> {numberWithCommas(data.todayCases)}
                  </h5>

                  <h5>Recuperados</h5>
                  <h5 className="mb15">
                  <FontAwesomeIcon className="text-success" icon={faUserCheck} /> {numberWithCommas(data.todayRecovered)}
                  </h5>
                </Col>
                <Col md="6">
                  <h5>Activos</h5>
                  <h5 className="mb15">
                  <FontAwesomeIcon className="text-warning" icon={faUserTag} /> {numberWithCommas(data.active)}
                  </h5>

                  <h5>Decesos</h5>
                  <h5 className="mb15">
                  <FontAwesomeIcon className="text-danger" icon={faUserTimes} /> {numberWithCommas(data.todayDeaths)}
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

export default SudPopOver
