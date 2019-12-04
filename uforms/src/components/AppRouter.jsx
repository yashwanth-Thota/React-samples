import React, { Component } from 'react'
import {Switch,BrowserRouter as Router,Route} from 'react-router-dom'
import Home from './pages/Home'
import CreateForm from './pages/CreateForm'
import Form from "./pages/Form"
import Header from './Header'
import Login from './pages/Login'
import InvalidUrl from './pages/InvalidUrl'
import Profile from './pages/Profile'
export default class AppRouter extends Component {
    
    render() {
        return (
            <Router >
                <Header/>
                <div style={{height:"7vh"}}></div>
                <div className="body">
                <Switch >
                    <Route exact path="/" render={props=><Home/>}/>
                    <Route exact path="/createForm/:formId" render={props=><CreateForm/>}/>
                    <Route exact path="/forms/:formId" render={props=><Form/>}/>
                    <Route exact path='/login' render={props=><Login/>} />
                    <Route exact path='/profile' render={props=><Profile/>}/>
                    <Route render={props=><InvalidUrl/>}/>
                </Switch>
                </div>
            </Router>
        )
    }
    
}
