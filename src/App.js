import Header from './components/Header'
import Blogs from './components/Blogs'
import React, { useState } from 'react'
import Createpost from './components/Createpost'
import { Route, Switch } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Login from './components/Login'


import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./components/Themes.js";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

const App = () => {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
      
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
    <div style ={{margin : '30px', padding: '30px', backgroundColor : 'peachpuff'}} classNameName='container'>
      <Header/>
      <>
      <Navbar />
        <Switch>
          <Route exact path = '/' component = {About}/>
          <Route path = '/contact' component={Contact}/>
          <Route path = '/blogs' component={Blogs}/>
          <Route path = '/createpost' component={Createpost}/>
          <Route path = '/login' component={Login}/>

        </Switch>
      
      </>
      {/* <About />
      <Contact /> */}
      
    </div>
    <button onClick={() => themeToggler()}>Change Theme</button>
    
    </StyledApp>
    </ThemeProvider>

  )
}

export default App