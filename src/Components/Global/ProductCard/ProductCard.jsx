import './ProductCard.css';
import {Link} from 'react-router-dom';
import { IoLogoUsd } from "react-icons/io";
import { FaBed, FaBath } from "react-icons/fa";
import { MdGpsFixed } from "react-icons/md";
import { RiRuler2Line } from "react-icons/ri";
import { BiBuildingHouse } from "react-icons/bi";


const ProductCard = ({id, title, ubicacion, mts, price, category, habitaciones, baños, type='grid'}) => {
    return (
        <article className={`productCard ${type}`}>
            <img src="http://placehold.it/300x300" alt="Mi producto de prueba"/>
            <div >
                <h1>{title}</h1>
                <p><MdGpsFixed size={20}/> {ubicacion}</p>

                <p><IoLogoUsd size={20} /> {price}</p>
                <p><BiBuildingHouse size={20}/> {category}</p>
                <p><FaBed size={20}/> {habitaciones}</p>
                <p><FaBath size={20}/> {baños}</p>
                <p><RiRuler2Line size={20}/> {mts} m2</p>                
                <Link to={`/${category}/${id}`}>Ver detalle</Link>
            </div>  
        </article>
    )
}

export default ProductCard;