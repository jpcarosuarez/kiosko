import './carrito.css';


const Carrito = ({action, qty}) => {
    return (
        <div className="overlay" id="carrito" onClick={action}>
            <div className="carrito">
                <span>{qty}</span>
                <a href="#" className="cerrar">Aceptar</a>
                           
            </div>
        </div>
    )
}

export default Carrito;