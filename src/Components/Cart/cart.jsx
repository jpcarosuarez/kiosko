import {useContext, useEffect, useState} from 'react';
import {Store} from '../../store';
import './Cart.css';
import { useHistory } from "react-router-dom";

import {Link} from 'react-router-dom';



const Cart = () => {

    const [data] = useContext(Store);
    const [prods, setProds] = useState([]);

    useEffect(() => {
        const productos = JSON.stringify(data.items);

        if(data.items.length) {
            
            localStorage.setItem('productos', productos);

        }
        if(localStorage.getItem('productos')) {
            setProds(JSON.parse(localStorage.getItem('productos')));

        } 
        else {
            setProds(data.items);
        }


    }, [data.items])
    
    
    console.log(data);


    return (
        <section className="cart">
            <h1>Confirmar reservas</h1>
            <ul>

                {
                    data.items.map(item =>(
                        <li>

                            <img src={item.img} alt={item.titulo}/>
                            <div>
                                <h2>{item.item.titulo} </h2>

                                <p>Cantidad: {item.cantidad} Noches</p>
                                <p>Precio por noche: <strong>${item.item.precio}</strong></p>
                                <p>Comision por plataforma: <strong>${(item.item.precio * 3) / 100 }  </strong> </p>
                                <p>Precio total: <strong>${((item.precio * item.cantidad)+((item.item.precio * 3 ) / 100 ))}</strong></p>
                            </div>

                        </li>

                    ))

                }

            </ul>
            <div className="final">
                <p>Precio total: {data.precioTotal}</p>
                <Link to="/checkout">Finalizar compra</Link>
            </div>

        </section>
    )
}
export default Cart;