import './nav.css';
import NavItem from '../NavItem/navItem';
import Logo from './img/logowhite.png';

function Nav(/*{titulo, action}*/) {

    return (
        <div className="headnav">
            <div className="container">
                <img className="logo" src={Logo} alt="logo" />;                
                <nav>
                    <ul>
                        <NavItem text="Ventas" url="https://www.google.com" />
                        <NavItem text="Arriendos" />
                        <NavItem text="Remates" />
                        <NavItem text="Permutas" />
                        <NavItem text="Alojamientos Amoblados"/>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Nav;