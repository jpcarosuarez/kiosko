import {useContext} from 'react';
import './WidgetCart.css';
import { useHistory } from "react-router-dom";

import {Store} from '../../../store';
import {BiBuildingHouse} from 'react-icons/bi';
import {Link} from 'react-router-dom';

const WidgetCart = ({show, action}) => {
    const [data] = useContext(Store);
    const items = [...data.items];
    const history = useHistory();

    console.log(data);
 

    return (
        <div className={`widgetCart ${show ? 'open' : 'close'}`}>
            <button className="centrar" onClick={action}><strong>X</strong></button>
            <h1><BiBuildingHouse /> Checkout</h1>

            {
            data.items.length ?
                items.map((items, WidgetCart) => (<p key={items.id}> {items.titulo} <br/> Cantidad: {items.quantity} <br/>Precio: ${items.precio}</p>)) : <p> tu carrito esta vacío</p>
            }

            <div className="final" >
                <p>Precio total: {data.precioTotal}</p>
                <Link to="/checkout">Finalizar compra</Link>
            </div>

            

        </div>
        
    )
}

export default WidgetCart;