import * as React from "react";
import {
  Navbar,
  NavDropdown,
  Nav,
  Form,
  FormControl,
  Button
} from "react-bootstrap";

const logo = require("../assets/logo.png");

interface IsmoNavbarProps {}

interface IsmoNavbarState {}

class IsmoNavbar extends React.Component<IsmoNavbarProps, IsmoNavbarState> {
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#notifications">Notifications</Nav.Link>
            <Nav.Link href="#messages">Messages</Nav.Link>
            <Navbar.Brand>
              <img
                alt="i"
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
              {" s m o"}
            </Navbar.Brand>
            <NavDropdown title="User" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Settings and privacy
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default IsmoNavbar;
