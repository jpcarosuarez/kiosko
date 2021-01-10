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
                <p>Amoblados desde {data.freeShipping} | {data.cuotas} cuotas sin interés</p>

            </div>

            <div>
                <NavCart action={action} />

            </div>

        </div>
       
    )
}
export default Menu;