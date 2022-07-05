import React from 'react';
import './Card.css';
function Card({ Status__Pic , Value, Unit, title}) {
    return (
        <div className='card' 
            style={{
                background : 'linear-gradient(135deg, hsla(60, 100%, 80%) 0%, hsla(200, 100%, 50%) 100%)',
                border: "1px solid skyblue" 
            }}>
            <img src={Status__Pic} alt=""/>
            <h1>{Value} {Unit}</h1>
            <p>{title}</p>
            
        </div>
    )
}

export default Card 
