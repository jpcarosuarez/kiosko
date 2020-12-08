import './modal.css';
import { BiBuildings } from "react-icons/bi";


const Modal = ({children}) => {
    return (
        <div className="overlay" id="modal">
            <div className="modal">
                <BiBuildings />
                <a href="#" className="cerrar">X</a>
                {children}
            </div>
        </div>
    )
}

export default Modal;