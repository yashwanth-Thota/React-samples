import React,{Component}from 'react'
import './CSS/App.css'
import CatalogLoader from './components/CatalogLoader'
import Header from './components/Header'
import {BrowserRouter as Router,Route} from "react-router-dom"
import AddMovie from './components/AddMovie';
class App extends Component  {
  state={
    isAdmin:false,
    isLoggedIn:false,
    userId:0,

  }
  
  render() {
    return(
      <Router>
    <div className="App">
      <Header className="header" isAdmin={this.state.isAdmin} isLoggedIn={this.state.isLoggedIn} login={this.login}>

      </Header>
      <Route exact path="/" render={props=>
        (
          <React.Fragment>
              <CatalogLoader viewMovie={this.viewMovie} rate={this.rate}/>
          </React.Fragment>
        )
        }>
      </Route>
      <Route exact path="/addMovie" render={props=>
        (
          <React.Fragment>
              <AddMovie/>
          </React.Fragment>
        )
        }>
      </Route>
    </div></Router>
  );
    }
    login=function(){

    }
    viewMovie=function(movieName){
        alert(movieName.name);
    }
    rate=(movieId)=>{
      alert(movieId);
    }
}

export default App;