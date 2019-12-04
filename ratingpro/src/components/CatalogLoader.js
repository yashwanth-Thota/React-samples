import React, { Component } from 'react'
import CatalogItem from './CatalogItem'
import $ from 'jquery';
export default class CatalogLoader extends Component {
    state={
        movieCatalog:[
            {
                id:"1",
                name:"Bahubali",
                rating:5,
                likes:300,
                source:"./bahubali.jpg",
                description:{
                    hero:"Prabhas",
                    director:"Rajamouli",
                    screenplay:"Nice screenplay"
                }
            },
            {
                id:"2",
                name:"Bahubali",
                rating:5,
                likes:300,
                source:"./bahubali.jpg",
                description:{
                    hero:"Prabhas",
                    director:"Rajamouli",
                    screenplay:"Nice screenplay"
                }
            },
            {
                id:"3",
                name:"Bahubali",
                rating:5,
                likes:300,
                source:"./bahubali.jpg",
                description:{
                    hero:"Prabhas",
                    director:"Rajamouli",
                    screenplay:"Nice screenplay"
                }
            },
            {
                id:"4",
                name:"Bahubali",
                rating:5,
                likes:300,
                source:"./bahubali.jpg",
                description:{
                    hero:"Prabhas",
                    director:"Rajamouli",
                    screenplay:"Nice screenplay"
                }
            },
            {
                id:"5",
                name:"Bahubali",
                rating:5,
                likes:300,
                source:"./bahubali.jpg",
                description:{
                    hero:"Prabhas",
                    director:"Rajamouli",
                    screenplay:"Nice screenplay"
                }
            },
            {
                id:"6",
                name:"Bahubali",
                rating:5,
                likes:300,
                source:"./bahubali.jpg",
                description:{
                    hero:"Prabhas",
                    director:"Rajamouli",
                    screenplay:"Nice screenplay"
                }
            }
        ]
    }
    componentDidMount(){
        $("#loader").fadeOut(7000);
        // Axios.get("http://10.223.0.111:8001/catalog/")
        // .then(res=>this.setState({movieCatalog:res.data}))
    }
    render() {
        return (
            <div id="catalogContainer" className="catalogContainer">
                <div id="loader" style={{display:"none"}} className="wrapper">
                    <div class="wrapper-cell">
                        <div class="image"></div>
                        <div class="text">
                        <div class="text-line"> </div>
                        <div class="text-line"></div>
                        <div class="text-line"></div>
                        </div>
                    </div>
                    <div class="wrapper-cell">
                            <div class="image"></div>
                            <div class="text">
                            <div class="text-line"> </div>
                            <div class="text-line"></div>
                            <div class="text-line"></div>
                            </div>
                    </div>
                    <div class="wrapper-cell">
                        <div class="image"></div>
                        <div class="text">
                        <div class="text-line"> </div>
                        <div class="text-line"></div>
                        <div class="text-line"></div>
                        </div>
                    </div>
                    <div class="wrapper-cell">
                            <div class="image"></div>
                            <div class="text">
                            <div class="text-line"> </div>
                            <div class="text-line"></div>
                            <div class="text-line"></div>
                            </div>
                    </div> <div class="wrapper-cell">
                        <div class="image"></div>
                        <div class="text">
                        <div class="text-line"> </div>
                        <div class="text-line"></div>
                        <div class="text-line"></div>
                        </div>
                    </div>
                    <div class="wrapper-cell">
                            <div class="image"></div>
                            <div class="text">
                            <div class="text-line"> </div>
                            <div class="text-line"></div>
                            <div class="text-line"></div>
                            </div>
                    </div> <div class="wrapper-cell">
                        <div class="image"></div>
                        <div class="text">
                        <div class="text-line"> </div>
                        <div class="text-line"></div>
                        <div class="text-line"></div>
                        </div>
                    </div>
                    <div class="wrapper-cell">
                            <div class="image"></div>
                            <div class="text">
                            <div class="text-line"> </div>
                            <div class="text-line"></div>
                            <div class="text-line"></div>
                            </div>
                    </div> 
                    <div class="wrapper-cell">
                            <div class="image"></div>
                            <div class="text">
                            <div class="text-line"> </div>
                            <div class="text-line"></div>
                            <div class="text-line"></div>
                            </div>
                    </div>
                    <div class="wrapper-cell">
                            <div class="image"></div>
                            <div class="text">
                            <div class="text-line"> </div>
                            <div class="text-line"></div>
                            <div class="text-line"></div>
                            </div>
                    </div>
                    <div class="wrapper-cell">
                            <div class="image"></div>
                            <div class="text">
                            <div class="text-line"> </div>
                            <div class="text-line"></div>
                            <div class="text-line"></div>
                            </div>
                    </div>
                </div> 
                <div style={{minHeight:"72px"}}></div>
            {this.state.movieCatalog.map((catalogItem)=>
            <CatalogItem key={catalogItem.id} movie={catalogItem} viewMovie={this.props.viewMovie} rate={this.props.rate}/>)}
            {/* <span className="next" style={{margin:"auto"}} onClick={this.scrollLeft}><i className="fa fa-arrow-right"></i></span> */}
            </div>
        )
    }
    
}
