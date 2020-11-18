
import React, {useState, useEffect} from 'react';
import './App.css';
import Body from './Components/Body';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MyProject from './Components/MyProjects';
import Contact from './Components/Contact';

function App() {

  const [theme, setTheme]= useState(true)
  const [nav, setNav]= useState(false)
  const [coin, setCoin] = useState(true)



//local saving
const saveLocalTheme =() => {
 
  localStorage.setItem("theme", JSON.stringify(theme))
  
}
const getLocalTheme = () => {
  if(localStorage.getItem('theme')===null){
    localStorage.setItem('theme', JSON.stringify([]))
  }else{
    let themeLocal= JSON.parse(localStorage.getItem("theme"))
    setTheme(themeLocal)
  }
}
  //use effect
  useEffect (() => {
    getLocalTheme()
  },[])
  useEffect (() => {
    saveLocalTheme();
  },[theme])


  
  return (
    
    <Router>
    <div className={` ${theme ? "" : "app_light"} App `}>
      <Navbar theme={theme} setTheme={setTheme} nav={nav} setNav={setNav}/>
        <Switch>
            <Route  exact path="/PresentationWebsite/">
                <Body theme={theme}/>
            </Route>
            <Route  exact path="/PresentationWebsite/projects">
                <MyProject theme={theme} coin={coin} setCoin={setCoin} />
            </Route>
            <Route  exact path="/PresentationWebsite/contact">
                <Contact theme={theme}/>
            </Route>

        </Switch>
      

      
        
    </div>
    </Router>
    
  );
}

export default App;
