import React from 'react'
import {Rnd} from 'react-rnd'

export default function ColumnSelector(props) {
    const defaults={
        default:{
            x:props.xPosition,
            y:0,
            width: props.width,
            height:props.height
        },
        disableDragging:true,
        enableResizing:{
          top:false, 
          right:true,
          bottom:false,
          left:false,
          topRight:false,
          bottomRight:false,
          bottomLeft:false,
          topLeft:false 
        },
        style:{
          backgroundColor:'white',
          border:"1px solid grey"
        },
        minWidth:70,
        minHeight:30
    }
    return (
        <Rnd {...defaults} resizeHandleStyles={{top:{backGroundColor:"red"}}}>
            {props.text}    
        </Rnd>
    )
    
}
