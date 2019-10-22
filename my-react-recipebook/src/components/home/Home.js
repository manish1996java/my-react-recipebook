import React, { Component } from 'react';
import { directive } from '@babel/types';
import Header from '../header/Header'
import AppNavbar from '../navbar/AppNavbar';
import Footer from '../footer/Footer';
import {Route,Switch} from 'react-router-dom';
import './Home.css';
import Recipe from '../recipe/Recipe';

class Home extends Component {

    state = {
        name: "manish"
    }
    render() {
        
        return (
            <div className="w-100 h-100">
                <AppNavbar/>
                    <Switch>
                        <Route path="/" exact component={Header}/>
                        <Route path="/recipe" component={Recipe}/>
                    </Switch>
                {/* <Footer/> */}
            </div>
        );
    }
}

export default Home;