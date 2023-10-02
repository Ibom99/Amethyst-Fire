import React from 'react'
import Navbar from '../components/navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import AppLocation from '../components/AppLocation'

const Jewelry = () => {
  return (
    <div>
      <AppLocation />
     
        
        <div id="detail" class="flex">
            <Sidebar />
            <Outlet />
        </div>
        
      
    </div>
  )
}

export default Jewelry
