import React from 'react'
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom'
import Home from './Home'
import InvalidUrl from './InvalidUrl'
import CoulmnSort from './ColumnSort'
import Resizable from './Resizable'
import Grid from './Grid'
import './App.css'
import Test from './Test'

class App extends React.Component {
  
  render(){
        return <Router>
          
        <header>
          <Link to="/resizable" className="nav-item">ResizableColumn</Link> <br/> 
          <Link to='/columnSort'  className="nav-item">ColumnSort</Link> <br/>
          <Link to='/grid'  className="nav-item">Grid</Link>
          
        </header>
          <Switch>
            <Route exact path="/" render={props=><Home/>}/>
            <Route exact path="/resizable" render={props=><Resizable/>}/>
            <Route exact path='/columnSort' render={props=><CoulmnSort/>}/>
            <Route exact path="/grid" render={props=><Grid/>}/>            
            <Route exact path="/test" render={props=><Test/>}/>
            <Route render={props=><InvalidUrl/>}/>
          </Switch>

          </Router>

  }
  handleWidthChange=()=>{

  }
  handleHeightChange=(e,ref,delta,pos)=>{
    console.log(pos)
    this.setState({height:this.state.height+pos.height})
  }      
}


export default App;