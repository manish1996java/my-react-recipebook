import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import RecipeStart from './RecipeStart/RecipStart';
import RecipeList from './RecipeList/RecipeList';
class Recipe extends Component {

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <RecipeList/>                   
                    </Col>
                    <Col>
                        <RecipeStart/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Recipe;