import React, { Component } from 'react'
class Product extends Component {
	addToCart=(e)=>{
		this.props.addToCart(e.target.value);
	}
	render(){
		return(<div className="postContainer">
                <h5 className="postTitle" key={this.props.product.photographer}>{this.props.product.photographer}</h5>
                <img className="postPic" src={this.props.product.src.large}/>
		<h5>Description</h5>
                <p className="postBody">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              
		<button className="btn btn-info btn-lg" onClick={this.addToCart} value={this.props.product.photographer}>
		   <span className="glyphicon">&#xe116;</span>ADD TO CART
		</button></div>
	);
	}
}
export default Product;
