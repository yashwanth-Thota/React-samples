import React from 'react'
import {Rnd} from 'react-rnd'

export default function RowSelector(props) {
    const defaults={
        default:{
            x:0,
            y:props.yPosition,
            width: props.width,
            height:props.height
        },
        disableDragging:true,
        enableResizing:{
        top:false, 
        right:false,
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
        position:"absolute"
        },
        minWidth:70,
        minHeight:30
    }   
        return (
        <Rnd {...defaults} onResizeStop={props.handleHeightChange}>
            {props.text}
            {props.children}
        </Rnd>
    )
        
}
