import React,{ Component} from 'react'
import axios from 'axios'

class  Product extends Component {
 componentDidMount(){
   this.setState({product:this.props.product})
 }
 state={
   product:{
     "productName":"",
     "productDescription":"",
     "productPrice":0,
     "categoryId":0
   }
 }
addToCart=()=>{
  this.props.addToCart(this.state.product);
}
  render () {
      return(
        <div className="card">
          <img src={this.props.product.src} alt="pic" style={{"width":"100%"}}/>
          <span className="badge badge-primary">{this.props.product.category}</span>
          <h1 >{this.props.product.productName}</h1>
          <p className="price">{this.props.product.productPrice}</p>
          <p>{this.props.product.prodcuctDescription}</p>
          <p><button className="AddCart"  onClick={this.addToCart}>Add to Cart</button></p>
        </div>
      );
  }
}

export default Product ;
