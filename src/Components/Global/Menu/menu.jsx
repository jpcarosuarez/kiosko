import './menu.css';
import Modal from '../Modal/modal';
import Carrito from '../Carrito/carrito';

import { BiClinic, BiCart } from "react-icons/bi";


function Menu() {

    return (
        <header>
            <nav>
                <ul>
                    <>
                    <a href="#carrito"> <BiCart size={25} /> Carrito</a>  
                    <Carrito>
                        <h3>Carrito de Compras</h3>
                        <p>Publicaciones</p>
                        <p>Destacados</p>
                        <p>Total </p>

                    </Carrito>
                  
                    <a href="#modal"> <BiClinic size={25} /> Agregar oferta</a>
                    <Modal>
                        
                        <h3>Publicar oferta</h3>
                        <p>Publicaciones</p>
                        <p>Destacados</p>
                        <p>Total </p>

                    </Modal>

                    </>

                </ul>
            </nav>
        </header>



       
    )
}




export default Menu;