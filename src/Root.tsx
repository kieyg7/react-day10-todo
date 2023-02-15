import React from 'react';
import {createGlobalStyle, ThemeProvider} from "styled-components";
import {Outlet} from "react-router-dom";
import {darkTheme} from "./styles/theme";


function Root() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Outlet />
    </ThemeProvider>
  );
}


const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    padding-top: 40px;
    font-family: 'Source Sans Pro', sans-serif;
    background-color: ${props => props.theme.bgColor};
    color: ${props => props.theme.textColor};
  }
  a {
    text-decoration:  none;
    color: inherit;
  }
  input, select {
    flex: 1 1 auto;
    height: 30px;
  }
  button {
    margin: 1px;
  }
`;


export default Root;
