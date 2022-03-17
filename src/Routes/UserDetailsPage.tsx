import React from 'react'
import Sidebar from '../component/Sidebar'
import UpperNavbar from '../component/UpperNavbar'

function UserDetailsPage() {
  return (
    <div>

    <UpperNavbar />
    <div className='flex-auto font-bold'>  <Sidebar />  //////////////// User Profile </div>
  
 </div>
  )
}

export default UserDetailsPage