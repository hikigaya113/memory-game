import React from 'react';
import './Card.css';
function Card(props){
    const{name,value}=props;
    return(
        <div className="card">
            <h1>{name||"JUNK FOOD"}</h1>
            <h2>You Have Consumed Upto {value||"100 cal"} Calories</h2>
        </div>
    )
}
export default Card;