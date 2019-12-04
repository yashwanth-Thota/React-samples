import React,{ Component } from 'react'
import Axios from 'axios'

export default class Home extends Component {
    state={
        alertMessage:null,
        success:false
    }
    constructor(props){
        super(props)
        this.ref=React.createRef()
    }
    componentDidMount(){
    }
    render() {
        return (
            <div>
                <div className="row"><h3 style={{margin:"auto"}}>Enter Movie Details</h3></div>
            <div className="row col-6">
                <form onSubmit={this.handleSubmit}>
                   <div className='form-group'>
                       <label> MovieName</label>
                       <input className='form-control' name='name' type='text'/>
                    </div>
                    <div className='form-group'>
                        <label>year of Release</label>
                        <input className='form-control' name='year' type='number' max='2019'/><br/>
                    </div>
                    <div className='form-group'>
                        <label>Director</label>
                        <input className='form-control' name='director' type='text'/><br/></div>
                    <div className='form-group'>
                        <label>Producer</label>
                        <input className='form-control' name='producer' type='text'/><br/></div>
                    <button type='submit'>ADD</button>
                </form>
            </div>
            
            <div className="row">    
            <Alert alertRef={this.ref} 
                            success={this.state.success} 
                            message={this.state.alertMessage}
                            toggleAlert={this.toggleAlert}        
                    />
                    </div>
            <button onClick={this.test}>TEST</button>
            </div>
        )
    }
   
    test=()=>{
        Axios({
            url:"http://localhost:8080/guesswhat/test",
            method:"GET"
        })
        .then(res=>res.data)
        .then(data=>console.log(data))
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.toggleAlert()
        let data=new FormData(e.target);
        let jsonData={
            name:data.get('name'),
            director:data.get('director'),
            producer:data.get('producer'),
            year:data.get('year')
        }
        Axios.post("http://localhost:8080/guesswhat/movies",jsonData)
        .then(res=>{
            this.toggleAlert()
            if(res.data) this.setState({alertMessage:jsonData.name+" Movie added to records",success:true})
            else this.setState({alertMessage:jsonData.name+" Movie already recorded",success:false})
        })
        .catch(err=>console.log(err))
    }

    toggleAlert=()=>{
        this.ref.current.classList.toggle("show")
    }
}

function Alert(props){
    const style=()=>{
        return {backgroundColor:props.success?"#4CAF50":"#f44336"}
    }
    return (
        <div ref={props.alertRef} className="alert col-6" style={style()}>
            <span className="closebtn" onClick={props.toggleAlert}>&times;</span> 
            <strong>{props.message}</strong> 
        </div>
    )
  
}