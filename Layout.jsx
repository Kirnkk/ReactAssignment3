import React from 'react'
import Header from './Header'

const Layout = ({children}) => {
  return (
    <div style={{display: "flex", flexDirection:'column',justifyContent:'center'}}>
    <Header/>
    <hr/>
    {children}
    </div>
  )
}

export default Layout