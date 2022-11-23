import React from "react";
import { Navbar, Container, Nav, DropdownButton, Dropdown, Row  } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser} from "@fortawesome/free-solid-svg-icons"
import './navbar.css'

export default class menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  state = {};
  render() {
    return (
      <Navbar id="barra">
        <Container>
          <Navbar.Brand href="#home">SportGamer <span id = "usuario-sub-branm"> </span></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/*<Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>*/}
            </Nav>
            
            <DropdownButton id="dropdown-basic-button" title="Usuario">
              <Dropdown.Header id = "dropdown-header">
                <Row>
                  <FontAwesomeIcon icon={faUser} />
                </Row>
                <Row>Usuario</Row>
              </Dropdown.Header >
              <Dropdown.Divider />
              <Dropdown.Item href="#/action-1" id="barra">Cerrar Sesión</Dropdown.Item>
              {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
            </DropdownButton>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
