import React from 'react'

import Container from  './Container'
export default function Field(props) {
    return (
        <Container>
            <input type={props.type} name={props.name}/>
        </Container>
    )
}
