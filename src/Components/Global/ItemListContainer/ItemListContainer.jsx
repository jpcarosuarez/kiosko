
import React, { useState } from "react";
import './ItemListContainer.css';
import CountContainer from "../CountContainer/CountContainer";



const ItemListContainer = ({titulo, precio, habitaciones, ubicacion_localidad }) => {
    
    //Contador //////////////////////
    const [count, setCount] = useState(0);
    const qty = 7;
  
    const add = () => {
      if (count < qty) {
        setCount(count + 1);
      }
      if (count === qty) {
        alert("Solo esta permitido ese stock");
      }
    };
    const less = () => {
      if (count === 0) {
        alert("No se puede menos de 0");
        return;
      }
  
      setCount(count - 1);
    }; 
    /////////////////////////////////////// 
    
    return (
        <article className="itemListContainer">
            <img src="https://placehold.it/400x400" alt="apartamento"/>
            <div>
                <h3>{titulo}</h3>
                <p>$&nbsp;{precio}</p>
                <p>Habitaciones {habitaciones} </p>
                <p>{ubicacion_localidad}</p>

                <CountContainer count={count} add={add} less={less} />

            </div>
    
        </article>
    )
}  

export default ItemListContainer;      
