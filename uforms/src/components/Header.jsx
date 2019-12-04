import React from 'react'
import {useSelector} from 'react-redux' 
import {Link} from 'react-router-dom'
import './css/Header.css'
export default function Header() {
    const user=useSelector(state=>state.user)
    const getMenu=()=>{
        if(user) return "Profile"
        return "Login"
    }
    return (
        <header>
            <Link className="nav-item center pointer" to='/'>UForms</Link>
            <Link className="nav-item nav-item-right pointer" to={"/"+getMenu().toLowerCase()}>{getMenu()}</Link>                
        </header>
    )
    
}