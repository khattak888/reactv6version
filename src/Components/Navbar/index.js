import React from 'react'
import { NavLink } from 'react-router-dom'

const activeStyle  = {
  color :"red"
}
const inActiveStyle = {
  color:"blue"  
}

const Navbar = ({links}) => {

  return (
    <div 
    style={{
        width:'100%',
        background:'#36cda08c',
        display:'flex',
        pading:'10px',
        justifyContent:'space-between'
      
  
    }}
     >
     {
       links.map(({to,label})=>(
         <NavLink key={to} to={to} style={({isActive}) => isActive ? activeStyle : inActiveStyle}>{label}</NavLink>
       ))
     }
    </div>
  )
}

export default Navbar