import React, { Component } from 'react'
class Rating extends Component {
	addToCart=(e)=>{
		this.props.addToCart(e.target.value);
	}
	render(){
		return(
      <div>
        <h1>this is rating</h1>
      </div>
	);
	}
}
export default Rating;
