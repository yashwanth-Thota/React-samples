import React from 'react'

export default function Container(props) {
    const style={
        padding:'8px',
        margin: 'auto',
        borderWidth:'0.6px',
        borderStyle:'solid',
        borderColor:  'lightgrey',
        textAlign:'center'
    }
    return (
        <div style={style} ref={props.containerRef} className={props.context}>
            {props.children}
        </div>
    )
}
