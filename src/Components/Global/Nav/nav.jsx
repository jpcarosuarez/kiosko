import './nav.css';
import NavItem from '../NavItem/navItem';

function Nav({titulo, action}) {

    return (
        <header>
            <div className="container">
                <h1>{titulo}</h1>
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
        </header>
    )
}

export default Nav;