import React from 'react'

export default function SideNav(props){
    const ref=React.createRef();
    const sideNavStyle={
        backgroundColor: '#454270',
        color:'#fff',
        position: 'fixed',
        left:'0',
        top:'7vh',
        height:'93vh',
        zIndex: '2'
    }
    const menuClick=()=>{
        ref.current.classList.toggle('hover')
    }
    return (
            <div style={sideNavStyle} className="shadow-dark sideNav col-4" ref={ref}>
                <div className="menu-icon" onClick={menuClick}>&#8801;</div>
            </div>
    )
}