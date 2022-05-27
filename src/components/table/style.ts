import styled from 'styled-components'
import { v } from "../../styles/variable"

export const TContainer = styled.div`
  display: flex;
   justify-content: center;
   align-items: center;
   height: 100vh;
   padding: 0 20px;
   width:100%;
   left: 0px;
   margin-right: 200px;
   background: rgb(245,245,245);
   @media only screen and (min-width: 768px){

   }

`
export const SLInkContainer =styled.div`
   margin-bottom: 400px;
   margin-left: 150px;
`
export const SLinkT= styled.button`
   display:flex;
   align-items: center;
   text-decoration: none;
   background: #fff;
   color: rgb(245,245,245);
   font-size: 20px;
   border: 1px solid rgba(230,230,230);

`
export const SLinkIconT =styled.div`
  padding: ${v.smSpacing} ${v.mdSpacing};
  display: flex;
  svg{
      font-size: 20px;
  }
`

export const SFTable = styled.table`
    border-collapse: collapse;
    text-align: center;
    border-radius: ${v.borderRadius};
    overflow: hidden;
     width:1026px;
     background: rgba(230,230,230);
   margin-left: 0px;
   margin-bottom: 100px;
     padding: 30px;
     @media only screen and (max-width: 768px){
         width: 700px;
     }
`
export const SThead = styled.thead`
position: sticky;
z-index: 100;
width: 789px;
`

export const STheadTR = styled.tr`
background: rgb(255,255,255);
`

export const STH = styled.th`
font-weight: normal;
padding: ${v.mdSpacing};
color: rgb(45,45,45);
text-transform: capitalize;
font-weight: 600;
font-size: 14px;
:not(:last-of-type){
    border-right: 1px solid rgb(245,245,245);
}
:first-of-type{
    width: 1%;
    white-space: nowrap;
}
`
export const SLink = styled.span`
   display:flex;
   align-items: center;
   text-decoration: none;
   color: inherit;
   font-size: 10px;
   cursor: pointer;
  

`
export const SLinkIcon = styled.div`
  padding: ${v.smSpacing} ${v.mdSpacing};
  display: flex;
  svg{
      font-size: 20px;
  }
`

export const STBody = styled.tbody``

export const STBodyTR = styled.tr`

background: ${({ theme }) => theme.bgAlpha};
:nth-last-of-type(even){
    background: rgba(250,250,250,.3);
}
`
export const STD = styled.td`
padding: ${v.mdSpacing};
border: 1px solid rgb(245,245,245);
font-size: 14px;
`

