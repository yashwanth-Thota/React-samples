import React, { Component } from 'react'
import Parse from '../utils/Parser'
import Axios from 'axios'
export default class Movies extends Component {

    state={
        movies:null,
        orderBy:"name",
        isAscending:false,
        name:"",
        director:"",
        producer:"",
        year:2019,
        showOnly:false
    }
    componentDidMount(){
        this.props.history.listen(()=>{            
           this.getMovies()
           .then(res=>{this.setState({movies:res.data})})
        })
        this.getMovies()
        .then(res=>{this.setState({movies:res.data})})
        console.log(this.props)
    }
    render() {
        return (
            <div>
                <div className="row">
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Search By Movie Name"/>
                    <input type="text" onChange={this.handleChange} value={this.state.director} name="director" placeholder="Search By Director"/>
                    <input type="text" onChange={this.handleChange} value={this.state.producer} name="producer" placeholder="Search By Producer"/>
                    Show only:<input type="checkbox" value={this.state.showOnly} name="showOnly" onChange={this.filter}/><input type="number" onChange={this.handleChange} value={this.state.year}default max="2019" name="year"/>
                    <button onClick={this.searchMovies}>Search</button>
                </div>
                <h3>All available movies</h3>
            <table>
                <tbody>
                <tr>
                    <th onClick={()=>this.setOrder("name")} >Movie Name</th>
                    <th onClick={()=>this.setOrder("director")} >Director</th>
                    <th onClick={()=>this.setOrder("producer")} >Producer</th>
                    <th onClick={()=>this.setOrder("year")} >Year of Release</th>
                </tr>         
                {this.state.movies&&this.state.movies.map(movie=>{
                    if(movie)
                       return <tr key={movie.name}>  
                                    <td>{movie.name}</td>
                                    <td>{movie.director}</td>
                                    <td>{movie.producer}</td>
                                    <td>{movie.year}</td>
                                </tr>
                })}
                </tbody>
            </table>
            </div>
        )
    }
    getMovies=()=>{
        return Axios.get("http://localhost:8080/guesswhat/movies"+this.props.location.search)
    }
    changeUrl=()=>{
            let prevState={...this.state}
            this.props.history.replace("/movies?search="+
                            this.state.name+"+"+this.state.director+"+"
                            +this.state.producer+"+"
                            +((this.state.year!=0&&this.state.showOnly)?this.state.year+"&":"&")+"orderBy="+
                            this.state.orderBy+"&order="+(this.state.isAscending?"DESC":"ASC"),prevState)
    }
    searchMovies=()=>{       
        this.changeUrl()
    }
    setOrder=(orderBy)=>{

        if(orderBy==this.state.orderBy) this.setState({isAscending:!this.state.isAscending})
        else this.setState({isAscending:false})
        this.setState({orderBy:orderBy})
   
        this.searchMovies()
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    filter=(e)=>{
        this.setState({[e.target.name]:e.target.checked})
    }
}