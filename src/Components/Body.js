import React from 'react'
import Bar from './Bar'



const Body = ({theme}) =>{
    return(
        <div className={` ${theme ? "" : "bodyy_light"} bodyy`}>
            <div className={` ${theme ? "" : "body1_light"} body1`}>
          
            </div>
            <div className={` ${theme ? "" : "body2_light"} body2`}>
                
                <Bar theme={theme}/>
                
                <div className={`box1 ${theme ? "" : "box1_lightl"}`}>
                    <h1>Safta Adelin Gabriel</h1>
                    <p> &nbsp; &nbsp;  &nbsp; Hello everyone and welcome to my presentation Website! I am  an 18 years old Romanian, and a first year 
                        student at the Faculty of Mathematics and Computer Science of the Univeristy of Bucharest.
                        I am very passionate about what I do, and I put a lot of time and effort into always learning new things as fast  and 
                        efficient as possible. Getting into C++ two years ago wasn't easy for me, but after a few months and hundreds of problems it became
                        the thing i love doing. After a while, Web Development caught my eye, and I started learning HTML, CSS, JS, and recently I
                         made the jump to React, which is very enjoyable.<br>
                         </br>
                         &nbsp; &nbsp;  &nbsp; Beside this, I am passionate about other things, like Hiking, long  walks on the beach, exploring new cities, and other 
                         activities related to this.



                
                   </p>
                </div>
            </div>
        </div>
    )
}
export default Body