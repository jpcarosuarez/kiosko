import './nav.css';
import NavItem from '../NavItem/navItem';

 
function Nav(/*{titulo, action}*/) {

    return (
        <div className="headnav">
            <div className="container">
                <nav>
                    <ul>
                        <NavItem text="Ventas" url="https://www.google.com" />
                        <NavItem text="Arriendos" />
                        <NavItem text="Remates" />
                        <NavItem text="Permutas" />
                        <NavItem text="Amoblados x días"/>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Nav;