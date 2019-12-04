import React from 'react'
import {Link} from 'react-router-dom'

export default function header() {
  return (
    <header style={headerStyle}>
        <h1>TodoList</h1>
      <Link to="./demo.html">demo</Link>
        <Link to="/" style={linkStyle}>Home</Link>{' | '}
        <Link to="/about" style={linkStyle}>About</Link>
    </header>
  )
}

const linkStyle={
  color:'#ffff',
  textDecoration:'none'
}
const headerStyle={
    background:'#333',
    color:'white',
    textAlign:'center',
    padding:'10px 5px',
    boxShadow:'0 2px 4px rgb(128,128,128)'
}
