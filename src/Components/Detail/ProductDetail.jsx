import {useState, useContext} from 'react';

import './ProductDetail.css';
import DatePickers from './../Global/Reservas/index';
import {Store} from './../../store';
import {useHistory} from 'react-router-dom';
import { IoLogoUsd } from "react-icons/io";
import { FaBed, FaBath } from "react-icons/fa";
import { MdGpsFixed } from "react-icons/md";
import { RiRuler2Line } from "react-icons/ri";
import { BiBuildingHouse } from "react-icons/bi";


const ProductDetail = ({item}) => {
    const history = useHistory();
    const [data, setData] = useContext(Store);
    const [qty, setQty] = useState(1);	

    const handleClickResta = () => {	
        if(qty > 1) {	
            setQty(qty - 1);	
        }	
    }

    const onAdd = () => {
        setData({
            ...data, 
            cantidad: data.cantidad + qty,
            items: [...data.items, {item: item, cantidad: qty}],
            precioTotal: data.precioTotal + (item.precio*qty)

        });
        history.push('/cart');
        // alert(`Agregaste ${qty} productos al carrito`);
    };

    console.log(data);

    return (

        <article className="productDetail">
            

            <div className="foto">
                <img src={`/inmuebles/${item.img}`} alt=""/>

            </div>

            <div className="info" >

                <h1 className="title">{item.titulo} </h1>
                {
                    !!item.descripcion && <p className="description"> {item.descripcion}</p>
                }
                <p className="price"><IoLogoUsd size={20} /> {item.precio} / Noche </p>
                <p className="Habitaciones" ><FaBed size={20}/> {item.habitaciones} </p>
                <p className="baños" ><FaBath size={20}/> {item.baños} </p>
                <p className="mts" ><RiRuler2Line size={20}/> {item.area} </p>
                <p className="ubicacion"><MdGpsFixed size={20}/> {item.ubicacion}</p>
                <p className="categoria"><BiBuildingHouse size={20} />{item.categoria}</p>
                <p>Entrada</p>
                <DatePickers />
                
                <p>Salida</p>
                <DatePickers />

                <h2>Huéspedes / Invitados</h2>

                <div className="qty">	
                    <button 	
                        disabled={qty === 1 ? 'disabled' : null } 	
                        onClick={handleClickResta}	
                    >	
                        -	
                    </button>	
                    <input type="text" value={qty} readOnly/>	
                    <button onClick={() => setQty(qty + 1)}>+</button>

                </div>

                <button className="btn" onClick={onAdd}>Reservar</button>
            </div>                 
                                 
        </article>
    );
}

export default ProductDetail;