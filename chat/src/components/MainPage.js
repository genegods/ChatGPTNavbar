import React from 'react'

import Navbar from './Navbar'
import SideBar from './SideBar'

const MainPage = () => {
  return (
    <React.Fragment>
    <main>
      <div>
        <div className="lg:hidden">
        <Navbar/>
        </div>

        <div className="">
          <div className="hidden lg:block"><SideBar/></div>
        </div>
        
       
      </div>
    </main>
  </React.Fragment>
  )
}

export default MainPage