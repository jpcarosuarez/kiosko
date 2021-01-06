
import './ItemListContainer.css';
import { IoLogoUsd } from "react-icons/io";
import { FaBed, FaBath } from "react-icons/fa";
import { MdGpsFixed } from "react-icons/md";
import { RiRuler2Line } from "react-icons/ri";
import {Link} from 'react-router-dom';



const ItemListContainer = ({id, titulo, precio, habitaciones, ubicacion, baños, mts }) => {
    
  

    
    return (
        <article className="itemListContainer">
            <img src="http://placehold.it/400x400" alt="apartamento"/>
            <div>
                <div className="precio">
                  <h4><IoLogoUsd size={20} />{precio}</h4>
                </div>

                <h2>{titulo}</h2> 
                <p><FaBed size={20}/> {habitaciones} </p>
                <p><MdGpsFixed size={20}/> {ubicacion}</p>
                <p><FaBath size={20}/> {baños}</p>
                <p><RiRuler2Line size={20}/>{mts} m2</p>
                <Link to={`/detail/${id}`}>Ver Más</Link> 
            </div>
    
        </article> 
    )
}  

export default ItemListContainer;      
