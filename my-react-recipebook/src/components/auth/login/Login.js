import React, { Component } from 'react';
import {Button , Card, Form} from 'react-bootstrap';
export class Login extends Component {
    render() {
        return (
                <Card bg="primary" className="text-center card-form mt-5">
                    <Card.Body>
                        <Card.Title>
                            sign Up Today
                        </Card.Title>
                        <Card.Text>Please fill out this form to regiter</Card.Text>
                        <Form >
                                <Form.Group >
                                        <Form.Control type="text"  placeholder="Username"/>
                                </Form.Group>
                                <Form.Group>
                                        <Form.Control type="text"  placeholder="Email"/>
                                </Form.Group>
                                <Form.Group >
                                        <Form.Control type="password" placeholder="password"/>
                                </Form.Group>
                                <Form.Group >
                                        <Form.Control type="password" placeholder="confpassword"/>
                                </Form.Group>
                                <Button variant="success" size="lg" type="text" block>submit</Button>
                            
                        </Form>
                    </Card.Body>
                </Card>
        );
    }
}

export default Login;
