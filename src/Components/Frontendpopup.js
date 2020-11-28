import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Frontend from './Images/frontend.jpg'


function Frontendpopup({front1, setFront1}) {
    return (
       <Modal className="frontend_modal"
            
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={front1}
            >
            
            <Modal.Body>
                <h1>
                    
                    Frontend Web Development
                </h1>
                <button onClick={() => {setFront1(false)}} className="front_button">
                    <i class="fas fa-times"></i>
                </button>
                <img src={Frontend} alt="frontend" className="popup_photo"/>
                <div className="popup_div">
                <div className="skills_separator"></div>
                <h3 className="popup_h3">Programming Languages:</h3>
                <ul className="popup_list">
                    <li><i class="far fa-star"></i> HTML</li>
                    <li><i class="far fa-star"></i> CSS</li>
                    <li><i class="far fa-star"></i> JavaScript(React)</li>
                </ul>
                </div>
            </Modal.Body>
            
        </Modal>
      
        )
}

export default Frontendpopup
