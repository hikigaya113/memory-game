import React, { useState } from 'react';
import './Tha19.css'
function Tha19() {
    var [count,setCount]=useState(0);
    return (
        <button onClick={() =>{
            setCount(count+1);
        }}>{count}</button>
    )
}
export default Tha19;