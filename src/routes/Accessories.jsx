import React from 'react'
import AppLocation from '../components/AppLocation'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'

const Accessories = () => {
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

export default Accessories
