import React from 'react';

const Contact = ({theme}) =>{
    return(
        <div className={` ${theme ? "" : "contact_light"} contact `}>
            <div className={` ${theme ? "" : "divmare_light"} divmare `}>
               
                <div className={` ${theme ? "" : "cards_light"} cards `}>
                    <div className="div1_facebook"> 
                        <i class="fab fa-facebook"></i>
                    </div>
                    <div className="div2_facebook">
                        <h1>My Facebook profile</h1>
                        <a href="https://www.facebook.com/adelin.safta">
                        <button>
                            View
                        </button>
                        </a>
                    </div>
                </div>
                <div className={` ${theme ? "" : "cards_light"} cards `}>
                    <div className="div1_instagram"> 
                        <i class="fab fa-instagram"></i>
                    </div>
                    <div className="div2_instagram">
                            <h1>My Instagram profile</h1>
                            <a href="https://www.instagram.com/adelinsafta/">
                            <button >
                                View
                            </button>
                            </a>
                    </div>
                    </div>
                <div className={` ${theme ? "" : "cards_light"} cards `}>
                    <div className="div1_github"> 
                            <i class="fab fa-github"></i>
                        </div>
                        <div className="div2_github">
                            <h1>My GitHub profile</h1>
                            <a href="https://github.com/adesafta2002">
                            <button  >
                                View
                            </button>
                            </a>
                        </div>
                </div>
                <div className={` ${theme ? "" : "cards_light"} cards `}>
                <div className="div1_linkedin"> 
                            <i class="fab fa-linkedin"></i>
                        </div>
                        <div className="div2_linkedin">
                            <h1>My LinkedIn profile</h1>
                            <a href="https://www.linkedin.com/in/adelin-gabriel-safta-0348121b5/">
                            <button >
                                View
                            </button>
                            </a>
                        </div>
                </div>
                
            </div>
           
        </div>
    )
}

export default Contact