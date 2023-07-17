import React from 'react'
import HomePage from '../Pages/HomePage'
import NavBar from '../Components/NavBar'
import { Outlet } from 'react-router-dom'
import { useContext } from 'react'
import ThemeContext from '../Hooks/themeContext'


const GlobalLayout = () => {
    const {theme} = useContext(ThemeContext)

  return (
    <div className={`global-layout ${theme}-theme`}>
    
        <NavBar/>
        <div className="container">

        <Outlet/>
        </div>
        

    </div>
  )
}

export default GlobalLayout