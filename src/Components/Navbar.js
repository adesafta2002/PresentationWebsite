import React, {useState} from 'react';
import {FaBars} from 'react-icons/fa';
import {Link} from 'react-router-dom';

const Navbar = ({theme, setTheme,nav, setNav}) =>{
    const statusHandler = (e) =>{
        
        setTheme(Boolean(Number(e.target.value)))
        console.log(Number(theme))
        
    }
    const navHandler = () =>{
        setNav(!nav)
        
    }
    const [button1, setButton1] = useState(false)
    const [button2, setButton2] = useState(false)
    const [button3, setButton3] = useState(true)
    const button1Handler = () =>{
        setButton1(true)
        setButton2(false)
        setButton3(false)
    }
    const button2Handler = () =>{
        setButton1(false)
        setButton2(true)
        setButton3(false)
    }
    const button3Handler = () =>{
        setButton1(false)
        setButton2(false)
        setButton3(true)
    }
    const button1color = () =>{
        if ((button1===true)&&(theme===false)) return "page_displayed_light";
            else if (button1===true) return "page_displayed";
                else return "";
    }
    const button2color = () =>{
        if ((button2===true)&&(theme===false)) return "page_displayed_light";
            else if (button2===true) return "page_displayed";
                else return "";
    }
    const button3color = () =>{
        if ((button3===true)&&(theme===false)) return "page_displayed_light";
            else if (button3===true) return "page_displayed";
                else return "";
    }

    return(
        
        <nav className={` ${theme ? "" : "navl"} nav `}>
            
            <h1>Safta Adelin Gabriel</h1>
            <ul className={` ${nav ? "nav_show" : ""}`}>
                <li>
                    <select  onChange={statusHandler} defaultValue={`${theme ? "1": "0"}`}>
                        <option value="0" >Color Theme </option>
                        <option value="1" >Dark Theme </option>
                        
                    </select>
                </li>
                <li><Link to="/contact"><button onClick={button1Handler} className={`${button1color()}`} >Contact Me</button></Link></li>
                <li><Link to="/projects"><button onClick={button2Handler} className={` ${button2color()}`} >My projects</button></Link></li>
                <li><Link to="/"><button onClick={button3Handler} className={` ${button3color()}`} >About me</button></Link></li>
            </ul>
            <div className="BarIcon" onClick={navHandler}>
            <FaBars/>
            </div>
            
        </nav>
    )
}

export default Navbar