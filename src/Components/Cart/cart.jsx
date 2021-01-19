import {useContext} from 'react';
import {Store} from '../../store';
import './Cart.css';
import {Link} from 'react-router-dom';

const Cart = () => {

    const [data] = useContext(Store);

    console.log(data);


    return (
        <section className="cart">
            <h1>Carro</h1>
            <ul>

                {
                    data.items.map(item =>(
                        <li>

                            <img src={`/inmuebles/${item.item.img}`} alt=""/>
                            <div>
                                <h2>{item.item.titulo} </h2>
        
                                <p>Cantidad:{item.cantidad} </p>
                                <p>Precio por unidad: <strong>${item.item.precio}</strong></p>
                                <p>Precio total: <strong>${item.item.precio * item.cantidad}</strong></p>
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