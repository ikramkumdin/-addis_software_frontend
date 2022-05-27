import React from 'react'
import List from "./pages/List";
import { store } from './app/store'
import { Provider } from 'react-redux'
import {SSidebar, Slogo, Titel,Top,SDivider,SLInkContainer,SLink,SLinkIcon,SLinkLabel} from '../src/components/sidebar/style'
import {logoo} from '../src/assets/index'
import {AiOutlineHome} from 'react-icons/ai'
import {IoIosCreate} from 'react-icons/io'
import {FaListUl} from 'react-icons/fa'
import { Route, Link, Switch, BrowserRouter } from "react-router-dom";
import Update from './pages/Update';
import Create from './pages/Create';
import Home from './pages/Home';
type Links ={
    label:string
    icon:any
    to:string
  }
  
const Routes = () => {
  return (
    <>
    <BrowserRouter>
      <Provider store={store}>
      <SSidebar >
       <Top>
       <Slogo>
          <img src={logoo} alt="logo"/>
        </Slogo> 
        <Titel>Dashboard</Titel>
       </Top>
       <SDivider/>
       {
          
          linkArray ? (linkArray.map((link)=>
      
          {
            return(
              <SLInkContainer key={link.label}>
              
                  <SLink to={link.to}>
                  <SLinkIcon>{link.icon}</SLinkIcon>
                  <SLinkLabel >{link.label}</SLinkLabel>
                   
               </SLink>
            
                
           

            </SLInkContainer>
            

            )
            
          }
          
          
          )):''
        }
       
          
      <SDivider/>

    </SSidebar> 
        <Route path='/' exact><Home/></Route>
        <Route path='/list' exact><List/></Route>
        <Route path='/create' exact><Create/></Route>
        <Route path='/update/:id' exact><Update/></Route>
      </Provider>,
    </BrowserRouter>
    
    </>
  )
}
const linkArray:Links[]=[
    {
      label:"Home",
      icon:<AiOutlineHome/>,
      to:'/'
    },
    {
      label:"Create",
      icon:<IoIosCreate/>,
      to:'/create'
    },
    {
      label:"List",
      icon:<FaListUl/>,
      to:"/list"
    },
  
  ]

export default Routes