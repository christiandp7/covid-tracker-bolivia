/*eslint-disable*/
import React from "react";
// used for making the prop types of this component
import PropTypes from "prop-types";

// reactstrap components
import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap";

import jhuLogo from '../../assets/img/JHU-white.png'
import worddometersLogo from '../../assets/img/worldometers.jpg'
import bolsegLogo from '../../assets/img/bolseg.png'

import yanderesalogo from '../../assets/img/yanderesa.jpg'

import dpLogo from '../../assets/img/dp1.png'


class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Container fluid>

          


          <div className="fuentes">
            <p>Fuentes de información:</p>
            <a target="_blank" href="https://www.worldometers.info/">
              <img className="img-responsive wordometers-logo" src={worddometersLogo} />
            </a>
            <a target="_blank" href="https://www.boliviasegura.gob.bo/">
              <img className="img-responsive bolseg-logo" src={bolsegLogo} />
            </a>
            <br />
            <a target="_blank" href="https://systems.jhu.edu/">
              <img className="img-responsive jhu-logo" src={jhuLogo} />
            </a>
          </div>
          
          <div className="fuentes">
            <p>Desarrollado en colaboración con:</p>
            <a target="_blank" href="https://www.yanderesa.net/">
              <img className="img-responsive yanderesa-logo" src={yanderesalogo} />
            </a>
          </div>



          {/*
          <Nav>
            <NavItem>
              <NavLink href="https://www.creative-tim.com/?ref=bdr-user-archive-footer">Creative Tim</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://www.creative-tim.com/presentation?ref=bdr-user-archive-footer">About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://www.creative-tim.com/blog?ref=bdr-user-archive-footer">Blog</NavLink>
            </NavItem>
          </Nav>
          */}
          
          <div className="copyright">
            <img className="img-responsive dp-logo" src={dpLogo} />
            <br />
            © {new Date().getFullYear()} | Desarrollado por{" "}
             <a
              href="https://www.linkedin.com/in/christiandp7/"
              target="_blank"
              className="text-info"
            >
              Christian Diaz Portela
            </a> y asesorado por {" "}
            <a
              href="https://www.linkedin.com/in/flavio-h-d%C3%ADaz-portela-6473814/"
              target="_blank"
              className="text-info"
            >
              Flavio Diaz Portela
            </a>.
          </div>
        </Container>
      </footer>
    );
  }
}

export default Footer;
