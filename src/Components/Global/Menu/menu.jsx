import './menu.css';

import Logo from './img/logowhite.png';
import {Link} from 'react-router-dom';


function Menu(action) {
    const qty = 3;

    return (
        <div className="top">

            <div className="logoTop">
                <Link to={"/"} ><img className="logoblanco" src={Logo} alt="logo" /></Link>   
 
            </div>



        </div>
       
    )
}




export default Menu;