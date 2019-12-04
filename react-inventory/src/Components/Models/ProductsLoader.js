import React from 'react'
import PropTypes from 'prop-types'
import Product from "./Product.js"
class ProductsLoader extends React.Component {
  render () {
      return(
        <div className="productLoader">
        {this.props.products.map((product)=>
          <Product product={product} addToCart={this.props.addToCart} />
        )}
      </div>
    );
  }
}
export default ProductsLoader;
