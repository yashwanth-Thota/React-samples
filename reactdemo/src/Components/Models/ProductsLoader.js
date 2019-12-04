import React, { Component } from 'react'
import Product from './Product'
class ProductsLoader extends Component {
	render(){
	return (
	<div className="ProductLoader">
	{this.props.products.map((product) => (
          <Product product={product} addToCart={this.props.addToCart}/>
      ))}
		</div>)
	}
}
export default ProductsLoader;
