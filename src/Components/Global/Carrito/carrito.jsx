import './carrito.css';
import { BiBuildings } from "react-icons/bi";


const Carrito = ({children}) => {
    return (
        <div className="overlay" id="carrito">
            <div className="carrito">
                <a href="#" className="cerrar">Aceptar</a>
                {children}           
            </div>
        </div>
    )
}

export default Carrito;