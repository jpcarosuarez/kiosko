import './ProductCard.css';
import {Link} from 'react-router-dom';
import { IoLogoUsd } from "react-icons/io";
import { FaBed, FaBath } from "react-icons/fa";
import { MdGpsFixed } from "react-icons/md";
import { RiRuler2Line } from "react-icons/ri";

import Imagen from "../Imagen/imagen";

const ProductCard = ({id, titulo, img, ubicacion, ciudad, categoria, direccion, area, precio, habitaciones, baños, type='grid'}) => {
   
    
    return (
        <Link to={`/${categoria}/${id}`}>
                 
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
                    <p><FaBed size={20}/> {habitaciones}</p>
                    <p><FaBath size={20}/> {baños}</p>
                    <p><RiRuler2Line size={20}/> {area} m2</p>
                </div>


                <div className="button" >
                    Ver detalle

                </div>
            </div>
  
        </article>
        </Link>

    )
}

export default ProductCard;