import './Footer.css';

import Logo from './img/logowhite.png';

import {Link} from 'react-router-dom';

   
function Footer() {

    return (
        <div className="footer">
            <div>

                
                <Link to={"/"} ><img className="logofoot" src={Logo} alt="logo" /></Link>


            </div>

        </div>


       
    )
}




export default Footer;