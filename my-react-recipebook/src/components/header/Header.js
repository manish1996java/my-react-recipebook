import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Login from '../auth/login/Login'
import './Header.css'




class Header extends Component {
    render() {
        return (
            <section id="showcase" className="text-white">
                <div class="primary-overlay" text="white">
                    <Container className="w-100 h-100" >
                        <Row className="align-items-center w-100 h-100">
                            <Col lg="8" className="text-center d-none d-lg-block">
                                <h2 className="display-4 text-uppercase pt-4">
                                    buy Ingredent according dishes..
                                </h2>
                                <p className="lead pt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti modi dicta dolores dolorum necessitatibus iusto optio ipsa praesentium rem asperiores vitae nam at iure assumenda quia, dignissimos molestias saepe harum.</p>
                                <Button variant="outline-light py-2 px-4 mt-3" className="text-white" > 
                                    {/* <i class="fas fa-arrow-right"></i> */}
                                    Read More
                                </Button>
                            </Col>
                            <Col lg="4">
                                <Login/>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        );
    }
}

export default Header;