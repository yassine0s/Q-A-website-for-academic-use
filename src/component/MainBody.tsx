import React from 'react'
import Sidebar from './Sidebar'
import UpperNavbar from './UpperNavbar'

function MainBody() {
  return (
    <div>
    <div> <div className=" relative flex-1 right-30 top-50"></div>
    <UpperNavbar />
        <Sidebar />
    </div></div>
  )
}

export default MainBody