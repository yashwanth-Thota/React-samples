import React, { Component } from 'react';
import PropTypes from 'prop-types'

class TodoItem extends Component {
    getStyle =() =>{
        return {
            backgroundColor:'#f4f4f4',
            padding:'5px',
            borderBottom:'1px solid #ccc',
            textDecoration:this.props.todo.completed?'line-through':'none'}
    }
  render() {
      const{id,title}=this.props.todo;
    return   (
        <div style={this.getStyle()}>
            <p>
                <input type='checkbox' onChange={this.props.markComplete.bind(this,id)}/>{'  '}
            { title}
            <button style={btnStyle} onClick={this.props.delete.bind(this,id)}>X</button>
            </p>
        </div>
        )    
    }
    
}

TodoItem.propTypes ={
    todo: PropTypes.object.isRequired
}
const btnStyle={
    backgroundColor:'red',
    color:'white',
    padding:'5px 10px',
    cursor:'pointer',
    float:'right',
    borderRadius:'50%'
}
const itemStyle= {
    backgroundColor: '#f4f4f4'
}
export default TodoItem;
