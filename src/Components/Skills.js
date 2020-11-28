import React, {useState} from 'react'
import Frontendpopup from './Frontendpopup'
import Backendpopup from './Backendpopup'
import Otherspopup from './Otherspopup'

const Skills = ({theme}) =>{
    const [front1, setFront1] = useState(false)
    const [front2, setFront2] = useState(false)
    const [front3, setFront3] = useState(false)
    const Popuptrue = () =>{
        if(front1===true || front2===true || front3===true) return "display";
        else return "display_false";
    }
    return(
        <>
        <div className={Popuptrue()}></div>
        <div className="skills_main">
           
             <div className={`${theme ? "":"cards2_light"} cards2`}>
                 <div>
                        <i className="far fa-eye"></i>
                </div>
                <div>
                    <div className="cards_title">
                        <h1>Frontend</h1>
                        <h2>Web Development</h2>
                    </div>
                        <button onClick={ () => {setFront1(true)}} className="frontend_card_button">More</button>
                        <Frontendpopup front1={front1} setFront1={setFront1}></Frontendpopup>
                </div>
             </div>
             <div className={`${theme ? "":"cards2_light"} cards2`}>
                <div>
                <i className="fas fa-database"></i>
                </div>
                <div>
                    <div className="cards_title">
                        <h1>Backend</h1>
                        <h2>Web Development</h2>
                    </div>
                        <button onClick={ () => {setFront2(true)}} className="frontend_card_button">More</button>
                        <Backendpopup front2={front2} setFront2={setFront2}></Backendpopup>
                </div>
             </div>
             <div className={`${theme ? "":"cards2_light"} cards2`}>
                    <div>
                        <i class="fas fa-code"></i>
                    </div>
                    <div>
                    <div className="cards_title">
                        <h1>Others</h1>
                        <h2>Technologies</h2>
                    </div>
                        <button onClick={ () => {setFront3(true)}} className="frontend_card_button">More</button>
                        <Otherspopup front3={front3} setFront3={setFront3}></Otherspopup>
                </div>
             </div>
            

            
            
        </div>
        </>
    )
}

export default Skills