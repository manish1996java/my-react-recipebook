import React, { Component } from 'react';
import { Navbar,Nav, Container, DropdownButton, Dropdown} from 'react-bootstrap';
import './AppNavbar.css'

export class AppNavbar extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" className="custom-shadow" fixed="top">
                <Container>
                    <Navbar.Brand href="#">Recipe-book</Navbar.Brand>
                    <Navbar.Toggle/>
                    <Navbar.Collapse>
                        <Nav className="ml-auto">
                            <Nav.Link>Recipe</Nav.Link>
                            <Nav.Link>ShopList</Nav.Link>
                            <DropdownButton id="dropdown-button" variant="outline-light ml-3" title="Manage">
                                <Dropdown.Item href="#">Login</Dropdown.Item>
                                <Dropdown.Item href="#">Signup</Dropdown.Item>
                                <Dropdown.Item href="#">LogOut</Dropdown.Item>
                            </DropdownButton>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default AppNavbar;
