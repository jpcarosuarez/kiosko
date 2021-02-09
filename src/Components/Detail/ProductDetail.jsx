import {useState, useContext, useEffect} from 'react';
import './ProductDetail.css';
import Reservation from '../Global/ReservaDias/index'
import {Store} from './../../store';
import {useHistory} from 'react-router-dom';
import { FaBed, FaBath } from "react-icons/fa";
import { MdGpsFixed } from "react-icons/md";
import { RiRuler2Line } from "react-icons/ri";
import { BiBuildingHouse } from "react-icons/bi";
import Imagen from '../Global/Imagen/imagen';
import {getFirestore} from '../../db';

const ProductDetail = ({item}) => {
    const history = useHistory();
    const [data, setData] = useContext(Store);
    const [qty, setQty] = useState(1);
    const db = getFirestore();

    const handleClickResta = () => {	

        if(qty > 1) {	
            setQty(qty - 1);	
        }	
    }


    const onAdd = () => {
        const itemId = item.id;
        console.log('itemId',item.id);
        console.log('item',item);
        const exist = data.items.some(items => items.id === itemId);
        if(exist) {
            const reservas = data.items.map ( producto => {
                if( producto.id === itemId) {
                    producto.quantity += qty;
                    return producto;
                } else {
                    return producto;
                }
            }); 
            data.items = [...reservas] 

            setData({
                ...data, 
                cantidad: data.quantity + qty,
                items:[...data.items],
                precioTotal: data.precioTotal + (item.precio*qty)*1.03

            });


        } else {
            item.quantity = qty;
            setData({
                ...data, 
                cantidad: data.quantity + qty,
                items: [...data.items, item],
                precioTotal: data.precioTotal + (item.precio * qty)*1.03
            })
            console.log("data",data);
            
        }
        history.push('/cart');
        // alert(`Agregaste ${qty} productos al carrito`);	

    };

    console.log(data);

    return (

        <article className="productDetail">
            


            <div className="info" >

                

                <h1 className="title"> {item.titulo} </h1>
                <p className="price"> $ {item.precio} / Noche </p>

                <div className="imagenDetail">
                    <Imagen src={item.img} />             

                </div>
                
                {
                    !!item.descripcion && <p className="description"> {item.descripcion}</p>
                }

                <div className="caracteristicas">
                    <div>
                        <p className="ubicacion"> <MdGpsFixed size={20}/> ubicacion: {item.ubicacion}</p>
 
                    </div>
                    <div>
                        <p className="Habitaciones" > <FaBed size={20}/> Hab: {item.habitaciones} </p>
 
                    </div>
                    <div>
                        <p className="baños" > <FaBath size={20}/> Baño(s): {item.baños} </p>
   
                    </div>
                    <div>
                        <p className="mts" > <RiRuler2Line size={20}/> Area de {item.area} m2</p>
   
                    </div>
                    <div>
                        <p className="categoria"> <BiBuildingHouse size={20} /> Categoria de Arriendo: {item.categoria}</p>

                    </div>

                </div>

                <h2>Huéspedes / Invitados</h2>
                <div className="contQty">
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

                </div>

                <div className="reservation">
                    <Reservation />

                </div >
                


                <div className="contBtn">

                    <button className="btn" onClick={onAdd}>Reservar</button>

                </div>
                
            </div>                 
                                 
        </article>
    );
}

export default ProductDetail;