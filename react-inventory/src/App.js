import React, { Component } from 'react';
import './App.css';
import Header from './Components/Pages/Header';
import Footer from './Components/Pages/Footer'
import $ from 'jquery'
import axios from "axios"
import ProductsLoader from "./Components/Models/ProductsLoader"
class App extends Component {
  componentDidMount(){
    $('#toggler').click(function(){
        $("#navToggler").slideToggle();
    });

    axios.get("http://localhost:8080/products")
      .then(res=>this.setState({products:res.data}));
    axios.get("http://localhost:8080/orders/")
      .then(res=>this.setState({orders:res.data}));
    axios.get("https://localhost/categories/")
      .then(res=>this.setState({categories:res.data}));
}
search=(searchText)=>{
    axios.get("http://localhost:8080/products?searchText"+searchText)
    .then(res=>this.setState({products=res.data}))
  }
  state={
    user:"",
    products:[],
    orders:[],
    categories:[]
  }
  test=()=>{
    console.log(this.state.products);
  }
  addToCart=(cartValue)=>{
    var date=new Date();
    date=date.getHours()+" hrs:"+date.getMinutes()
    +" minutes:"+date.getMilliseconds()+" secs ("+date.getDate()
    +"/"+date.getMonth()+"/"+date.getYear()+")";
    axios.post("http://localhost:8080/orders",{
      productId:cartValue.productId,
      userId:state.user.userId,
      date:date,
      deliveryTime:0
    })
    .then(res=>this.setState({orders:res.data}))
  }
  getOrders=()=>{
    alert(this.state.orders);
  }
  render() {
    return (
      <div className="App">
      <Header search={this.search} user={this.state.user} getOrders={this.getOrders}/>
      <ProductsLoader addToCart={this.addToCart} products={this.state.products}/>
        <button onClick={this.test}>test</button><script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
                integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
                crossorigin="anonymous">
        </script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js"
            integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut"
            crossorigin="anonymous">
        </script>
        <script
              src="https://code.jquery.com/jquery-3.3.1.slim.js"
              integrity="sha256-fNXJFIlca05BIO2Y5zh1xrShK3ME+/lYZ0j+ChxX2DA="
              crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js"
            integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k"
            crossorigin="anonymous">
        </script>

      </div>
    );
  }
}

export default App;
