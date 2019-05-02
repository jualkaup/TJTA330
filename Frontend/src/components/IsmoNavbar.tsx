import * as React from "react";
import {
  Navbar,
  NavDropdown,
  Nav,
  Form,
  FormControl,
  Button,
  Row,
  Col
} from "react-bootstrap";

const logo = require("../assets/logo3.png");

interface IsmoNavbarProps { }

interface IsmoNavbarState { }

class IsmoNavbar extends React.Component<IsmoNavbarProps, IsmoNavbarState> {
  render() {
    return (
      <div>
        <Row>
          <Col sm>
          </Col>
          <Col sm={5}>
            <Navbar id="nav" fixed="top" bg="dark" variant="dark" expand="lg">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                <Navbar.Brand>
                    <img
                      alt="ismo"
                      src={logo}
                      width="93"
                      height="30"
                      className="d-inline-block align-top"
                      onClick={() => { window.scrollTo(0, 0) }}
                    />
                  </Navbar.Brand>
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#notifications">Notifications</Nav.Link>
                  <Nav.Link href="#messages">Messages</Nav.Link>
                  <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button id="navbarSeachButton" variant="outline-success">Search</Button>
                  </Form>
                  <NavDropdown title="User" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Settings and privacy
              </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Logout</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
          <Col sm >

          </Col>
        </Row>
      </div>
    );
  }
}

export default IsmoNavbar;
