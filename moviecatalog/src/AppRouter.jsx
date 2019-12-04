import React, { Component } from 'react'
import {Switch,BrowserRouter as Router,Route}  from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/Home'
import Movies from './components/Movies'
export default class AppRouter extends Component {
    render() {
        return (
            <Router>
                <Header/>
                <Switch>
                    <Route exact path='/' render={props=>
                        <React.Fragment>
                            <Home/>
                        </React.Fragment>
                    }/>
                    <Route exact path='/movies' render={props=>
                        <React.Fragment>
                            <Movies {...props}/>
                        </React.Fragment>
                        
                    }/>
                    <Route render={props=>"Invalid URL"}/>
                </Switch>
            </Router>
        )
    }
}
