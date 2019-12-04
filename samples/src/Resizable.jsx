import React from 'react'
import {Rnd} from 'react-rnd'
export default function Resizable() {
    const columnDefaults={
        default:{
            x:100,
            y:50,
            width: 120,
            height:500
        },
        disableDragging:true,
        enableResizing:{
          top:false, 
          right:true,
          bottom:true,
          left:false,
          topRight:false,
          bottomRight:false,
          bottomLeft:false,
          topLeft:false 
        },
        style:{
          backgroundColor:'white',
          border:"1px solid grey",
          marginTop:"100px"
        },
        minWidth:70,
        minHeight:30
    }
    return (
        <Rnd {...columnDefaults} >
            
        </Rnd>
    )
}
