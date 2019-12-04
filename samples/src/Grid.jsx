import React, { Component } from 'react'

import Cell from './Cell'
import RowSelector from './RowSelector'
import ColumnSelector from './ColumnSelector'

export default class Grid extends Component {
    state={
          width:70,
          height:30,
          cols:5,
          rows:5
        }
    createGrid =()=>{
        let grid=[]
        for(let i=0;i<this.state.rows;i++){
            var cols=[]
            for(let j=0;j<this.state.cols;j++){
                
                cols.push(i===0?<ColumnSelector width={this.state.width} height={this.state.height}
                    xPosition={(j+1)*70} text="col"/>
                    :<Cell xPosition={(j+1)*70} yPosition={i*30} 
                        width={this.state.width} height={this.state.height}
                        text="cell"/>)
            }  
            let row=<RowSelector yPosition={i*30} text="row" width={this.state.width} height={this.state.height} handleHeightChange={this.handleHeightChange} >
                     {cols.map(e=>e)}   
                    </RowSelector>
            grid.push(row)
        }
        return grid
    }
            
    render() {
        return (
                <div>
               
                <div style={{right:"10vw",zIndex:99999,marginRight:"150px",position:"fixed"}}>
                    <h3>Grid Size</h3><br/>
                COLUMNS:<input value={this.state.cols}  name="cols" onChange={this.handleChange}/><br/>
                <br/>
                ROWS:<input value={this.state.rows} name="rows" onChange={this.handleChange}/>
                </div>
                {this.createGrid()}
                </div>
            )
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
}
