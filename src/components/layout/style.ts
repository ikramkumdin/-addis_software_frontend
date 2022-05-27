import styled from "styled-components";
import {v} from "../../styles/variable";

export const SLayout= styled.div`
    display: flex;
`

export const SMain = styled.main`
     padding:calc(${v.smSpacing}*2);
     h1{
         font-size: 14px;
     }
    max-width: 786px;
    margin: auto;
   
`