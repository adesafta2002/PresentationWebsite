import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Backend from './Images/backend.jpg'


function Backendpopup({front2, setFront2}) {
    return (
       <Modal className="frontend_modal"
            
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={front2}
            >
            
            <Modal.Body>
                <h1>
                    
                    Backend Web Development
                </h1>
                <button onClick={() => {setFront2(false)}} className="front_button">
                    <i class="fas fa-times"></i>
                </button>
                <img src={Backend} alt="backend" className="popup_photo"/>
                <div className="popup_div">
                <div className="skills_separator"></div>
                <h3 className="popup_h3">Programming Languages:</h3>
                <ul className="popup_list">
                    <li><i class="far fa-star"></i>  MySQL Oracle (Learned in High School)</li>
                    <li><i class="far fa-star"></i> NodeJS(learning)</li>
                    
                </ul>
                </div>
            </Modal.Body>
            
        </Modal>
      
        )
}

export default Backendpopup