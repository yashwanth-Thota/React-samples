import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import Container from '../functional/Container';
import Button from '../functional/Button';

export default function Profile() {
    const user=useSelector(state=>state.user)
    return (
        <Container context='flex'>
            <Container context='left'>
                <h3>{user.name}</h3>
                <h3>{user.email}</h3>
                <Button name='LOG OUT' context='danger'/>
            </Container>
            <Container context='right'>
                <h3>{user.name}</h3>
                <h3>{user.email}</h3>
                <Button name='LOG OUT' context='danger'/>
            </Container>
        </Container>
    )

}
