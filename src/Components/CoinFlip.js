import React, { useState } from 'react'
import Head from './Images/head1.png'
import Tails from './Images/tails1.png'

const CoinFlip = ({coin, setCoin}) =>{
    const[rotate, setRotate]= useState("")
    const[show, setShow] = useState(false)
    const animationHandler = () =>{
        setRotate("animatie")
        setShow(true)
    }
    const coinHandler = () =>{
        setTimeout(function() {
            var min=0;
            var max=2;
       
            setCoin(Math.random() * Math.floor(max-min))
            coin=parseInt(coin)
            coin=Boolean(Number((coin)))
           console.log(coin)
         }, 500);
       
        
    }
    const clickHandler = () =>{
        coinHandler()
        animationHandler()
        console.log(rotate)
    }
    const animationZero = () =>{
        setRotate("nimic")
    }
    const animation2Zero = () =>{
        setShow(false)
    }
return(
    <div className="coinflip_div">
        <img alt="head2" src={Head} onAnimationEnd={animationZero} className={` ${parseInt(coin) ? "head" : " "} ${rotate}`}/>
        <img alt="tails2" src={Tails} onAnimationEnd={animationZero} className={` ${parseInt(coin) ? "" : "tails"} ${rotate} `} />
                <h1 className={`${show ? "animatieshow":""} h1_coin`} onAnimationEnd={animation2Zero}> {parseInt(coin) ? "Head!" : "Tails!"}</h1>
        <button onClick={clickHandler} >Flip a coin!</button>
    </div>
)
}
export default CoinFlip
