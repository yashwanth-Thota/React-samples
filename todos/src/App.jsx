import React, { Component } from 'react';
import Header from './Components/layouts/header'
import Todos from './Components/Todos';
import AddTodo from './AddTodo'
import uuid from 'uuid'
import About from './Components/pages/About'
import {BrowserRouter as Router,Route} from "react-router-dom"
import Axios from 'axios'
import './App.css';
class App extends Component {
  state={
    todos:[]
  }
  componentDidMount(){
      Axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res=>this.setState({todos:res.data}));
    Axios.get("http://192.168.43.99:8080/users/")
      .then(res=>console.log(res));

  }
  delete= (id)=>{
      Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(res=>this.setState({todos:
          [...this.state.todos.filter(todo=>todo.id!=id)]}));
  }
  markComplete = (id) => {
    this.setState({todos:this.state.todos.map(todo=>{
      if(todo.id === id){
        todo.completed =!todo.completed;

      }
      return todo;
    }) });
}

addTodo=(title)=>{
      Axios.post("https://jsonplaceholder.typicode.com/todos",{
        title,
        id:uuid.v4(),
        completed:false
      }).then(res=>this.setState({
        todos:[...this.state.todos,res.data]
      }))
}
  render() {
    return (
      <Router>
      <div className="App">
      <Header/>
      <Route path='/' render={props=>(
        <React.Fragment>
            <AddTodo addTodo={this.addTodo}/>
            <Todos todos={this.state.todos} markComplete={this.markComplete} 
                delete={this.delete}/>
        </React.Fragment>
      )}/>
      <Route path="/about" component={About}/>
       
      </div>
      </Router>
    );
  }
}

export default App;
