import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
 *{
     margin: 0;
     padding: 0;
     box-sizing: border-box;
     
     color: var(--secondary);
 }

 html, border-style, #root{
    max-height: 100vh;
    max-width: 100vw;

    width: 100%;
    height: 100%;
 }

 *, button, input{
     border: 0;
     background: none;
     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
 }

 html {
    background: var(--primary);
 }
 
 :root{
     --primary: #F0F0F0;
     --secondary: #303030;
     --white: #FFFFFF;
     --gray: #808080;
     --yellow: #FF9E00;
     --purple: #5A189A;
     --dark-hover: #03096C;
     --light-hover: #7B2CBF;
 }

`