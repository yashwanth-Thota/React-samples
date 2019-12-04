import React,{useState} from 'react'
import ColumnSelector from './Cell'
import RowSelector from './RowSelector'

export default function Test(props) {
    const [width,height]=useState(0)
    const createGrid=()=>{
        let grid=[]
        for(let i=0;i<10;i++){
            
            grid.push(<RowSelector yPosition={(i+1)*30} text="row" width={width} height={height}/>)
        }
        for(let i=0;i<10;i++){
        grid.push(<ColumnSelector xPosition={(i+1)*70} text="row" width={width} height={height}/>)
        }
        return grid
    }
    return (
        <div>
        { createGrid()}
        </div>
    )
}
