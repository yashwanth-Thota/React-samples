import React,{ Component}from 'react'
import PropTypes from 'prop-types'

class Header extends Component {
  state={
    searchText:""
  }
  getOrders=()=>{
    this.props.getOrders();
  }
  onSubmit=(e)=>{
    e.preventDefault();
    this.props.search(this.state.searchText);
  }
  onInput=(e)=>{
    this.setState({[e.target.name]:e.target.value});
  }
  menu=()=>{
    if(props.user.userId>0){
        loginMenu(props);
    }
    else{
        logOffMenu(props);
    }
  }
  loginMenu=(props)=>{
    if(props.user.userCategory=="user"){
        return userMenu()+<li className="nav-item">
                  <a className="nav-link" href="/orders" 
                        onClick={this.getOrders}>ORDERS
                  </a>
                </li>;
    }
    else if(props.user.userCategory=="seller"){
      return sellerMenu()+<li className="nav-item">
                <button className="nav-link" href="/orders" 
                      onClick={this.getOrders}>ORDERS
                </button>
              </li>;
    }
    else{
      return 
    }
  }
  logOffMenu=()=>{
    return <li className="nav-item"><a className="nav-link" href="#">Login</a></li>;
  }
  userMenu=()=>{

  }
  adminMenu=()=>{

  }
  sellerMenu=()=>{

  }
  render () {
      return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <a className="navbar-brand" href="#">Inventory</a>
            <button className="navbar-toggler"  type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" id="toggler"></span>
            </button>
            <div className="collapse navbar-collapse" id="navToggler">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">HOME <span class="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Products</a>
              </li>            
              <menu user={this.props.user}/>
            </ul>
            <form className="form-inline" onSubmit={this.onSubmit}>
                <input className="form-control mr-sm-2" type="search" name="searchText" placeholder="Search" aria-label="Search" onChange={this.onInput}/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
            </div>
        </nav>
      );
  }
}
export default Header;
