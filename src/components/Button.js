import React from "react";
import '../style/button.css';
import { Link } from "react-router-dom";


export const Button = ({ text}) =>{

    return(
        <div className="button-container">
            <h1>Il tuo profilo</h1>
            <Link to='/user' >
            <button className='button' >
               <div className="icon-button">{text}</div> 
               
            </button>
          </Link>
        </div>
    )

}