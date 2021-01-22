import './menu.css';
import {useContext} from 'react';
import Logo from './img/logowhite.png';
import {Link} from 'react-router-dom';
import {Store} from '../../../store';
import NavCart from '../NavCart/NavCart';


function Menu({action}) {
    const [data] = useContext(Store); 

    return (
        <div className="top">

            <div className="logoTop">
                <Link to={"/"} ><img className="logoblanco" src={Logo} alt="logo" /></Link>
                   

            </div>

            <div className="anuncio">

                <p>Arriendos disponibles desde $ {data.valor_minimo_arriendo} </p>

            </div>


            

            <div>
                <NavCart action={action} />

            </div>

        </div>
       
    )
}
export default Menu;