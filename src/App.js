
import React, {useState, useEffect} from 'react';
import './App.css';
import Body from './Components/Body';
import Navbar from './Components/Navbar';
import {HashRouter , Switch, Route} from 'react-router-dom';
import MyProject from './Components/MyProjects';
import Contact from './Components/Contact';

function App() {

  const [theme, setTheme]= useState(true)
  const [nav, setNav]= useState(false)
  const [coin, setCoin] = useState(true)
  const [body, setBody] = useState("dark")



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
  useEffect(() => {
    settingBody()
    document.body.classList.toggle(body);
  },[body,theme])
  //functions
  const settingBody = () =>{
    if (theme===true) setBody("dark")
    else setBody ("color")
  }


  
  return (
    
    <HashRouter  basename="/">
    <div className={` ${theme ? "" : "app_light"} App `}>
      <Navbar theme={theme} setTheme={setTheme} nav={nav} setNav={setNav}/>
        <Switch>
            <Route  exact path="/">
                <Body theme={theme}/>
            </Route>
            <Route  exact path="/projects">
                <MyProject theme={theme} coin={coin} setCoin={setCoin} />
            </Route>
            <Route  exact path="/contact">
                <Contact theme={theme}/>
            </Route>

        </Switch>
      

      
        
    </div>
    </HashRouter>
    
  );
}

export default App;
