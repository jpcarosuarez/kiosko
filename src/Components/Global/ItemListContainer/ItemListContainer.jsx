
import {useState } from 'react';
import './ItemListContainer.css';
import CountContainer from '../CountContainer/CountContainer';
import { IoLogoUsd } from "react-icons/io";
import { FaBed, FaBath } from "react-icons/fa";
import { MdGpsFixed } from "react-icons/md";
import { RiRuler2Line } from "react-icons/ri";
import {Link} from 'react-router-dom';




const ItemListContainer = ({titulo, precio, habitaciones, ubicacion, baños, mts }) => {
    
  
    //Contador //////////////////////
    const qty = 7;
    const [count, setCount] = useState(0);
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
                <div className="precio">
                  <h4><IoLogoUsd size={20} />{precio}</h4>
                </div>

                <h2>{titulo}</h2> 
                <p><FaBed size={20}/> {habitaciones} </p>
                <p><MdGpsFixed size={20}/> {ubicacion}</p>
                <p><FaBath size={20}/> {baños}</p>
                <p><RiRuler2Line size={20}/>{mts} m2</p>

                <CountContainer count={count} add={add} less={less} />
                <Link to="/detail">Ver más</Link> 
            </div>
    
        </article> 
    )
}  

export default ItemListContainer;      
