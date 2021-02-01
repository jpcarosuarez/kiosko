import './ProductCard.css';
import {Link} from 'react-router-dom';
import { IoLogoUsd } from "react-icons/io";
import { FaBed, FaBath } from "react-icons/fa";
import { MdGpsFixed } from "react-icons/md";
import { RiRuler2Line } from "react-icons/ri";
import { BiBuildingHouse } from "react-icons/bi";
import Imagen from "../Imagen/imagen";

const ProductCard = ({id, titulo, img, ubicacion, area, precio, categoria, habitaciones, baños, type='grid'}) => {
   
    
    return (
                         
        <article className={`productCard ${type}`}>
            
            <div>
                <Imagen src={img} alt={titulo} width="300px" height="300px" />             
            </div>

            <div>
                <h1>{titulo}</h1>
                <p><MdGpsFixed size={20}/> {ubicacion}</p>
                <p><IoLogoUsd size={20} /> {precio}</p>
                <p><BiBuildingHouse size={20}/> {categoria}</p>
                <p><FaBed size={20}/> {habitaciones}</p>
                <p><FaBath size={20}/> {baños}</p>
                <p><RiRuler2Line size={20}/> {area} m2</p>
                <Link to={`/${categoria}/${id}`}>Ver detalle</Link>
            </div>

  
        </article>
    )
}

export default ProductCard;