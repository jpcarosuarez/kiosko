import './menu.css';
import Modal from '../Modal/modal';
import Carrito from '../Carrito/carrito';

import { BiClinic, BiCart } from "react-icons/bi";
import Logo from './img/logowhite.png';
import {Link} from 'react-router-dom';


function Menu() {

    return (
        <div className="top">
            <nav>
                <div>
                    <Link to={"/"} ><img className="logoblanco" src={Logo} alt="logo" /></Link>    
                </div>

                <div>
                    <a href="#carrito"><BiCart size={25} /> </a>  
                
                    <Carrito>
                    <h3>Carrito de Compras</h3>
                    <p>Publicaciones</p>
                    <p>Destacados</p>
                    <p>Total </p>

                    </Carrito>
                  
                    <a href="#modal"> <BiClinic size={25} /></a>
                
                    <Modal>    
                    <h3>Publicar oferta</h3>
                    <p>Publicaciones</p>
                    <p>Destacados</p>
                    <p>Total </p>
                    </Modal>

                </div>



            </nav>

        </div>


       
    )
}




export default Menu;