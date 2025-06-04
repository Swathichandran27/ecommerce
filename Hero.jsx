import React from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Hero.css'
function Hero(){
    return(
        <div className="hero">
        <div className="hero-left">
          
          <div>
            <div className="hand-hand">
                <p style={{ animation: 'blink 1.5s infinite',color:'#dc143c'}}><i>Dress Up</i></p>
                
                
            </div>
            <p style={{ animation: 'blink 1.5s infinite',color:'#dc143c' }}><i>Feel</i></p>
            <br></br>
            <p style={{ animation: 'blink 1.5s infinite',color:'#dc143c' }}><i>Fabulous</i></p>
          </div>
          
          <div className="hero-latest-btn">
            <div>   <h3><i>Latest Collection</i></h3></div>
            <ArrowForwardIcon/>
            <div className="im"></div>
          </div>
        </div>
        <div className="hero-right">
         
         
        </div>
        </div>
    )

}
export default Hero;