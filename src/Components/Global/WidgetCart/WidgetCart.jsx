import {useContext} from 'react';
import './WidgetCart.css';
import {Store} from '../../../store';
import {BiBuildingHouse} from 'react-icons/bi';
import {Link} from 'react-router-dom';

const WidgetCart = ({show, action}) => {
    const [data] = useContext(Store);
    console.log(data);
 

    return (
        <div className={`widgetCart ${show ? 'open' : 'close'}`}>
            <button className="centrar" onClick={action}><strong>X</strong></button>
            <h1><BiBuildingHouse /> Checkout</h1>

            {
                data.items.map(item => <p key={item.id}>{item.item.titulo} <br/> Cantidad: {item.cantidad} <br/>Precio: ${item.item.precio}</p>)
            }

            <div className="final" >
                <p>Precio total: {data.precioTotal}</p>
                <Link to="/checkout"><p>Finalizar compra</p> </Link>
            </div>

            

        </div>
        
    )
}

export default WidgetCart;