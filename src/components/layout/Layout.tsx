import React from 'react'
import SideBar from '../sidebar/SideBar'
import Routes from '../../../src/Routes'
import { SLayout, SMain } from './style'
import {Link} from 'react-router-dom'

const Layout = ({children}:any) => {
  return (
    <>
    <SLayout> 
      <Routes/>
      <SMain>
        
        {children}
         
      </SMain>
  </SLayout>
   </>
  )
}

export default Layout