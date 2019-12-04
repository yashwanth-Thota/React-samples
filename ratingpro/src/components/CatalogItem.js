import React, { Component } from 'react'
import Axios from 'axios';
class CatalogItem extends Component {
	state={
		isRated:true,
		movie:null
	}
	componentWillMount(){
		this.setState({movie:this.props.movie})
		Axios.get("http://10.223.0.111:8083/ratings/"+this.props.movieId+"/"+this.props.userId)
			.then(res=>{
				if(res.data) this.setState={isRated:true}
			})
	}
	componentDidMount(){
		if(this.state.isRated) document.getElementById(this.state.movie.id+"rateBtn").disabled=false;
	}
	render(){
		return(

      <div className="catalogItem"  >
		  <img id="img" className="left movie-poster" alt="Movie poster" src={require(process.env.PUBLIC_URL+this.state.movie.source)}/>
		  <span className="movie-name" onClick={()=>this.props.viewMovie(this.state.movie)}>{this.state.movie.name}</span>
		  <span className="rating" >{this.state.movie.rating}</span>
		  <i className="fa fa-heart "></i>
		  <span className="likesCount">{this.state.movie.likes} likes</span> <br></br>
		  {/* <section className="description">
			  <h4 className="content-title left">Hero<span className="content">{this.state.movie.description.hero}</span></h4>
			  <h4 className="content-title left">Director<span className="content">{this.state.movie.description.director}</span></h4>
			  <h4  className="content-title left">Screenplay<span className="content">{this.state.movie.description.screenplay}</span></h4>
		  </section> */}
		  <button id={this.state.movie.id+"rateBtn"} onClick={()=>this.props.rate(this.state.movie.id)} className="rate-btn">Rate</button>
      </div>
	);
	}
	
}
export default CatalogItem;
