import React, { Component } from 'react'
import $ from 'jquery'
class Header extends Component {
  
	render(){
		return(
      <nav> 
        <span className="menu-icon left" onClick={this.menuClick}>&#8801;</span>      
        <ul id="nav">
        <li className="left nav-pills" onClick={this.menuClick}><a href="/">Home</a>
					</li>
          {/* <li className="left "><span><input type="text" placeHolder="search" className="nav-search"/><span className="fa fa-search"></span></span></li> */}
					<li className="right nav-pills" onClick={this.menuClick}><a href="#contact">Movies</a>
					</li>
					{/* <li className="right nav-pills" onClick={this.menuClick}><a href="#about">Contact</a>
          </li> */}
          <li className="right nav-pills" onClick={this.menuClick}><a href="/addMovie">Add Movie</a></li>
					<li className="right nav-pills" onClick={this.menuClick}><a href="#credits">Login</a>
					</li>
        </ul>
        <h3 className="title">RATINGPRO</h3>
      </nav>
	);
  }
  menuClick=function () {
    $("#nav").slideToggle();
  }
}
export default Header;