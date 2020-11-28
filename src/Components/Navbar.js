import React, {useState } from 'react';
import {FaBars} from 'react-icons/fa';
import {NavLink as Link, activeClassName } from 'react-router-dom';

const Navbar = ({theme, setTheme,nav, setNav}) =>{
    const statusHandler = (e) =>{
        
        setTheme(Boolean(Number(e.target.value)))
        console.log(Number(theme))
        
    }
    const navHandler = () =>{
        setNav(!nav)
        
    }
    
    
    
    return(
        
        <nav className={` ${theme ? "" : "navl"} nav `}>
            <Link exact to="/">
                <h1>Safta Adelin Gabriel</h1>
            </Link>
            <ul className={` ${nav ? "nav_show" : ""}`}>
                <li>
                    <select  onChange={statusHandler} defaultValue={`${theme ? "1": "0"}`} value={`${theme ? "1": "0"}`}>
                        <option value="0" >Color Theme </option>
                        <option value="1" >Dark Theme </option>
                        
                    </select>
                </li>
                <li><Link exact to="/contact"  activeClassName={`${theme ? "active_dark" : "active_light"}`}><button>Contact Me</button></Link></li>
                <li><Link exact to="/projects" activeClassName={`${theme ? "active_dark" : "active_light"}`}><button>My projects</button></Link></li>
                <li><Link exact to="/" activeClassName={`${theme ? "active_dark" : "active_light"}`}><button>About me</button></Link></li>
            </ul>
            <div className="BarIcon" onClick={navHandler}>
            <FaBars/>
            </div>
            
        </nav>
    )
}

export default Navbar