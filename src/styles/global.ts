import { createGlobalStyle} from "styled-components";

export const GlobalStyle= createGlobalStyle`

*, *::before, *::after{
    margin:0;
    box-sizing:border-box;
}
body{
    background: rgb(245,245,245);
    color:rgb(45,45,45);
    font-family: 'Roboto', sans-serif;
    letter-spacing :.6px;
}
`

