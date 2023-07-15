import React from 'react'
import {NavLink} from "react-router-dom"
import  "./style/bookstyle.css"

const Header = () => {
  return (
  <header style={{backgroundColor: "#fff0f0"}}> 
    <h1 style={{paddingLeft:'500px',backgroundColor:'pink'}}>Book Store </h1>
    <hr/>
    <div style={{display:'flex',justifyContent:'space-evenly',fontSize:"20px"}}> 
        <NavLink to='/DisplayBooks'>Display Book List</NavLink>
        <NavLink to='/AddBooks'>Add Book</NavLink>
    </div>
  </header>
  )
}

export default Header