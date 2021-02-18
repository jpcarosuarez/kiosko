import './ProductCard.css';
import {Link} from 'react-router-dom';
import { IoLogoUsd } from "react-icons/io";
import { FaBed, FaBath } from "react-icons/fa";
import { MdGpsFixed } from "react-icons/md";
import { RiRuler2Line } from "react-icons/ri";
import { BiBuildingHouse } from "react-icons/bi";

import Imagen from "../Imagen/imagen";

const ProductCard = ({id, titulo, img, ubicacion, ciudad, direccion, area, precio, categoria, habitaciones, baños, type='grid'}) => {
   
    
    return (
                         
        <article className={`productCard ${type}`}>
            
            <div className="imagen">
                <Imagen src={img} alt={titulo}/>             
            </div>

            <div className="info">
                <div className="titulo" >
                    <h1>{titulo}</h1>   
                </div>
                <div className="detalle">
                    <p><MdGpsFixed size={20}/> {ubicacion}</p>
                    <p>{ciudad} {direccion}</p>
                    <p><IoLogoUsd size={20} /> {precio}</p>
                    <p><BiBuildingHouse size={20}/> {categoria}</p>
                    <p><FaBed size={20}/> {habitaciones}</p>
                    <p><FaBath size={20}/> {baños}</p>
                    <p><RiRuler2Line size={20}/> {area} m2</p>
                </div>


                <div className="button" >
                    <Link to={`/${categoria}/${id}`}>Ver detalle</Link>

                </div>
            </div>

  
        </article>
    )
}

export default ProductCard;