import {useContext} from 'react';
import {Store} from '../../store';
import './checkout.css';



const Checkout = () => {
    const [data, setData] = useContext(Store);
    
    return (
        <section className="checkout">
            <div className="container">
                <h2>Datos de Reserva</h2>

                <form>
                    <input type="text" name="nombre" placeholder="Nombre" />
                    <input type="text" name="apellido" placeholder="Apellido" />
                    <input type="email" name="email" placeholder="E-mail" />
                    <input type="tel" name="tel" placeholder="Teléfono" />
                    
                    <button>Reservar</button>
                </form>
            </div>
        </section>
    )
}

export default Checkout;