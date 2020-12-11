import './modal.css';


const Modal = ({children}) => {
    return (
        <div className="overlay" id="modal">
            <div className="modal">
                <a href="#" className="cerrar">Cerrar</a>
                {children}
            </div>
        </div>
    )
}

export default Modal;