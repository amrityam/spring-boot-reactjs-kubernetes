import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import spring_boot_logo from '../images/spring-boot-logo.svg';
import react_logo from '../images/react-logo.svg';
import docker_logo from '../images/docker-logo.svg';
import k8_logo from '../images/k8-logo.svg';
import covid19_virus from '../images/covid19-virus.svg';


class Navigation extends React.Component {


  render() {
    return (

      <div>

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

          <Navbar.Brand><img
            alt="covid19"
            src={covid19_virus}
            width="90"
            height="30"
            className="d-inline-block align-top"
          /></Navbar.Brand>

          <Navbar.Brand>COVID-19 Live Tracker</Navbar.Brand>


          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <LinkContainer to="/dashboard">
                <Nav.Link>Dashboard</Nav.Link>
              </LinkContainer>
            </Nav>
            <Nav className="mr-auto">
              <LinkContainer to="/service">
                <Nav.Link>Service</Nav.Link>
              </LinkContainer>
            </Nav>
            <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
            <Navbar.Brand><img
              alt="spring-boot"
              src={spring_boot_logo}
              width="90"
              height="30"
              className="d-inline-block align-top"
            />
              <img
                alt="reactjs"
                src={react_logo}
                width="50"
                height="30"
                className="d-inline-block align-top"
              />
              <img
                alt="docker"
                src={docker_logo}
                width="75"
                height="40"
                className="d-inline-block align-top"
              />
              <img
                alt="kubernetes"
                src={k8_logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              /></Navbar.Brand>
            <Nav className="mr-auto">
              <LinkContainer to="/about">
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
            </Nav>

          </Navbar.Collapse>
        </Navbar>
      </div>

    );
  }

}

export default Navigation;
