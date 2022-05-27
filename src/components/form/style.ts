import styled from 'styled-components'
import { v } from "../../styles/variable"

export const FContainer = styled.div`
     width:1024px;
     background: rgb(255,255,255);
     margin: auto;
     padding: 30px;

`
export const Titel = styled.span`
    font-size: 1.5em;
    font-weight: bold;
    text-align: center;
    margin-top: 2em;
   
    color: rgb(45,45,45); 
`
export const EForm = styled.div`
    width: 700px;
    background: red;
    /* margin: auto; */
`
export const GroupForm = styled.div`
    background: rgba(250,250,250,.3);
    border:1px solid rgba(230,230,230) ;
    border-radius: ${v.borderRadius};
    margin: .4em 0;

    input[type="text"]{
        width: 100%;
        padding: .6em 1em;
        margin: .5em 0;
        font-size: 1em;
        padding: 0 ${v.smSpacing};
        font-family: inherit;
        letter-spacing: inherit;
        outline: none;
        border: none;
        color: inherit;
        background: transparent;
    }
    input[type="radio"]{
        margin: 1em 2em;

    }
    input[type="radio"]::before{
        content: "";
    background: var(--border-btn);
    border-radius: 100%;
    border: 1px solid var(--border);
    display: inline-block;
    width: 1em;
    height: 1em;
    position: relative;
    top:-0em ;
    margin-right: .5em;
    vertical-align: top;
    cursor: pointer;
    text-align: center;
    transition: all 250ms ease;

    }


`
export const SLInkContainer =styled.div`
   margin-bottom: 600px;
   margin-left: 150px;
`
export const SLink= styled.button`
   display:flex;
   align-items: center;
   text-decoration: none;
   background: #fff;
   color: rgb(245,245,245);
   font-size: 20px;
   border: 1px solid rgba(230,230,230);

`
export const SLinkIcon =styled.div`
  padding: ${v.smSpacing} ${v.mdSpacing};
  display: flex;
  svg{
      font-size: 20px;
  }
`
export const SLinklabel =styled.span`
    text-decoration: none;
    color:rgb(45,45,45) ;
 
  ` 
export const LabelForm = styled.span`
 display: block;
  flex: 1;
  margin-left: ${v.smSpacing};
`
export const FormWrapper = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   height: 100vh;
   padding: 0 20px;
   width:1024px;
   background: rgb(245,245,245);
   margin: auto;

`
export const SForm = styled.form`
width: 700px;
padding:40px;
background-color: rgb(255,255,255);
border-radius: 10px;
box-sizing: border-box;
box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.2);
@media only screen and (max-width: 768px){
       width: 600px;
   }
   @media only screen and (max-width: 414px){
       width: 200px;
   }

`

export const Shand = styled.span`
  font-size: 38px;
  text-align: center;
  margin: 10px;
  display: block;
  font-family: 'Poppin' sans-serif;

`
export const SInput = styled.input`
  display: block;
  width: 100%;
  background:rgba(230,230,230);
 height: 40px;
 border-radius: 5px;
 border: 1px solid rgba(230,230,230) ;
 margin: 10px 0 20px 0;
 padding: 20px;
 box-sizing: border-box;
 color:rgb(45,45,45);

`
export const SButton = styled.button`
display: block;
background-color: rgb(52,131,235) ;
font-size: .9rem;
border: 0;
border-radius: 5px;
height: 40px;
width: 100%;
cursor: pointer;
margin-top: 15px;
box-sizing: border-box;

`
export const SFieldset = styled.fieldset`
border: 1px solid rgba(230,230,230) ;
border-radius: 5px;
padding: 10px;
margin: 20px 0;
legend{
    padding: 0 10px;
}
label{
    padding-right:20px;
}
input{
    margin-right: 10px;
}


`
export const SError = styled.div`
color: red;
font-weight: 800;
margin:  0 0 40px 0;
`