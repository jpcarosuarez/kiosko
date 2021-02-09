import {useContext, useEffect, useState} from 'react';
import {Store} from '../../store';
import './Cart.css';
import {Link} from 'react-router-dom';
import Imagen from '../Global/Imagen/imagen';


const Cart = () => {

    const [data] = useContext(Store);
    const [prods, setProds] = useState([]);

    useEffect(() => {

        if(data.items.length) {
            const productos = JSON.stringify(data.items);
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
                    prods.map(item =>(
                        <li key={item.id}>

                            <Imagen src={item.img} alt={item.titulo}/>
                            <div>
                                <h2>{item.titulo} </h2><br/>
                                <p>Cantidad: {item.quantity} Noches</p>
                                <p>Precio por noche: <strong>${item.precio}</strong></p>
                                <p>Comision por plataforma: <strong>${(item.precio * 3) / 100 }  </strong> </p>
                                <p>Precio total: <strong>${((item.precio * item.cantidad)+((item.precio * 3 ) / 100 ))}</strong></p>
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