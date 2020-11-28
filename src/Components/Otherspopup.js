import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Others from './Images/others.jpg'


function Otherspopup({front3, setFront3}) {
    return (
       <Modal className="frontend_modal"
            
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={front3}
            >
            
            <Modal.Body>
                <h1>
                    
                    Other Technologies
                </h1>
                <button onClick={() => {setFront3(false)}} className="front_button">
                    <i class="fas fa-times"></i>
                </button>
                <img src={Others} alt="others" className="popup_photo"/>
                <div className="popup_div">
                <div className="skills_separator"></div>
                <h3 className="popup_h3">Programming Languages:</h3>
                <ul className="popup_list">
                    <li><i class="far fa-star"></i> C++ (More than 2 years of problem solving in High School) </li>
                    <li><i class="far fa-star"></i> Python (Basic level - currently improving) </li>
                    
                </ul>
                
                </div>
            </Modal.Body>
            
        </Modal>
      
        )
}

export default Otherspopup