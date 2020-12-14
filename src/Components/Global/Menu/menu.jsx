import './menu.css';
import Modal from '../Modal/modal';
import Carrito from '../Carrito/carrito';

import { BiClinic, BiCart } from "react-icons/bi";
import Logo from './img/logowhite.png';

import Avatar from '@material-ui/core/Avatar';



function Menu() {

    return (
        <header>
            <nav>
                <ul>
                   
                <img className="logoblanco" src={Logo} alt="logo" />    




                    

                <Avatar alt="Juan Pablo" src="#" />

                <a href="#carrito"> <BiCart size={25} /> </a>  
                
                <Carrito>
                <h3>Carrito de Compras</h3>
                <p>Publicaciones</p>
                <p>Destacados</p>
                <p>Total </p>

                </Carrito>
                  
                <a href="#modal"> <BiClinic size={25} /> Publica Gratis</a>
                
                <Modal>    
                <h3>Publicar oferta</h3>
                <p>Publicaciones</p>
                <p>Destacados</p>
                <p>Total </p>
                </Modal>


                    

                </ul>

            </nav>

        </header>


       
    )
}




export default Menu;