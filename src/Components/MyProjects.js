import React from 'react';
import TodoApp from './TodoList/TodoApp';
import Atestat1 from './Images/atestat1.png'
import Atestat2 from './Images/atestat2.png'
import Atestat3 from './Images/atestat3.png'
import Atestat4 from './Images/atestat4.png'
import Atestat5 from './Images/atestat5.png'
import Atestat6 from './Images/atestat6.png'
import CoinFlip from './CoinFlip';


const MyProject = ({theme, coin, setCoin}) =>{
    return(
        <div className={` ${theme ? "" : "projects_light"} projects `}>
            <div className={` ${theme ? "" : "projectsdiv_light"} projectsdiv `}> <TodoApp></TodoApp> </div>
            <div className={` ${theme ? "" : "projectsdiv_light"} projectsdiv2 `}>
                 <div className="atestat_description">
                     <h1>Certificate project</h1>
                    <p>
                    This is one of the first Websites I have created, and it is a presentation Website of Barcelona. This was necessary for 
                    my Computer Science Certificate for High School and at the time I did not know a lot about creating UIs. The Programming Languages
                    I have used are CSS and HTML
                    </p>
                </div>
                <div>
                <img alt="" src={Atestat1} className="atestat1"/>
                <img alt="" src={Atestat2} className="atestat2"/>
                <img alt="" src={Atestat3} className="atestat3"/>
                </div>
                <div>
                <img alt="" src={Atestat4} className="atestat4"/>
                <img alt="" src={Atestat5} className="atestat5"/>
                <img alt="" src={Atestat6} className="atestat6"/>
                </div>
              
                
            </div>
            <div className={` ${theme ? "" : "projectsdiv_light"} projectsdiv `}>
                <CoinFlip coin={coin} setCoin={setCoin} ></CoinFlip>
            </div>
            <div  className={` ${theme ? "" : "footer_light"} footer `}>
                @ 2020, Adelin Safta
            </div>
        </div>
    )
}

export default MyProject