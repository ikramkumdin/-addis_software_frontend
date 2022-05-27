import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { v , btnReset} from "../../styles/variable"
export const SSidebar=styled.div`
     width: ${v.sidebarWidth};
     background: rgb(255,255,255);
     height: 100vh;
     padding: ${v.lgSpacing};
     position: relative;
`

export const Titel= styled.span`
  display: block;
  flex: auto;
  font-size: 28px;
  font-family: 'Poppins', sans-serif;
`
export const Top= styled.span`
  display: flex;
  justify-content: space-between;
`
export const Slogo =styled.div`
     width:62px;

     img{
         max-width: 100%;
         height: auto;
     }
     cursor: pointer;
     margin-bottom: ${v.lgSpacing};
`
export const SSearch =styled.div`
background: rgba(250,250,250,.3);
border:1px solid rgba(230,230,230) ;
border-radius: ${v.borderRadius};
input{
    padding: 0 ${v.smSpacing};
    font-family: inherit;
    letter-spacing: inherit;
    font-size: 16px;
    width: 100%;
    outline: none;
    border: none;
    color: inherit;
    background: transparent;
}
display: flex;

`
export const SSearchIcon =styled.button`
${btnReset};
padding: ${v.smSpacing} ${v.mdSpacing};
display:flex;
cursor: pointer;
svg{
    font-size: 20px;
}
` 
export const SDivider =styled.div`
  height: 1px;
  width: 100%;
  background: rgba(230,230,230);
  margin: ${v.lgSpacing} 0;

`
export const SLInkContainer =styled.div`
  background: transparent;
  border-radius: ${v.borderRadius};
  margin: 8px 0;
  :hover{
      box-shadow: inset 0 0 0 1px rgba(230,230,230);
  }
`
export const SLink= styled(Link)`
   display:flex;
   align-items: center;
   text-decoration: none;
   color: inherit;
   font-size: 16px;
   padding: calc(${v.smSpacing} - 2px) 0;

`
export const SLinkIcon =styled.div`
  padding: ${v.smSpacing} ${v.mdSpacing};
  display: flex;
  svg{
      font-size: 20px;
  }
`
export const SLinkLabel=styled.span`
  display: block;
  flex: 1;
  margin-left: ${v.smSpacing};

`
export const STheme=styled.div`
   display: flex;
   align-items: center;
   font-size: 16px;
`
export const SThemeLabel = styled.span`
   display: block;
   flex: 1;
`
export const SThemeToggler=styled.button`
${btnReset}
   margin: 0 auto;
   cursor: pointer;
   width: 36px;
   height: 20px;
   border-radius: 10px;
   background: rgba(230,230,230);
   position:relative;
`
export const SToggleThumb= styled.div`
   height: 18px;
   width: 18px;
   position: absolute;
   top:1px;
   bottom: 1px;
   transition: .2s ease right;
   right: calc(100%-18px-1px);
   border-radius: 50%;
   background: rgb(52,131,235);
`
export const SSidebarButton =styled.button`
${btnReset};
position:absolute;
top:${v.xxlspacing};
height: 32px;
border-radius: 50%;
background: transparent;
box-shadow: 0 0 4px transparent;
display:flex;
align-items: center;
justify-content: center;
cursor: pointer;

`