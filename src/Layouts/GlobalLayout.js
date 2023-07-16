import React from 'react'
import HomePage from '../Pages/HomePage'
import NavBar from '../Components/NavBar'
import { Outlet } from 'react-router-dom'

const GlobalLayout = () => {
  return (
    <div className='global-layout'>
    
        <NavBar/>
        <div className="container">

        <Outlet/>
        </div>
        

    </div>
  )
}

export default GlobalLayout