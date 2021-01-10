import './nav.css';
import NavItem from '../NavItem/navItem';
import {Link} from 'react-router-dom';

 
function Nav({titulo}) {
    const menuItems = [
        {
            texto:'Apartamentos',
            ruta: '/category/apartamentos',
        },        
        {
            texto:'Casas',
            ruta: '/category/casas',
        },
        {
            texto:'Fincas',
            ruta:'/category/fincas',
        },
        {
            texto:'Espacios',
            ruta:'/category/espacios',
        },
        {
            texto:'Busco Roomates',
            ruta:'/category/roomates',
        },
        {
            texto:'Tienda',
            ruta:'/category/tienda',
        },

    ]


    return (
        <div className="headnav">
            <div className="container">
                <h1>
                    <Link to="/">{titulo}</Link>
                </h1>


                <ul>
                    {
                        menuItems.map((seccion, index) => <NavItem key={index} text={seccion.texto} url={seccion.ruta} />)
                    }
                </ul>


            </div>
        </div>
    )
}

export default Nav;