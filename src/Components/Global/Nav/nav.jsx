import './nav.css';
import NavItem from '../NavItem/navItem';
import Carrito from '../Carrito/carrito';

 
function Nav({titulo, action}) {
    const menuItems = [
        {
            texto:'Apartamentos',
            ruta: '/category/apartamentos',
        },        
        {
            texto:'Casas',
            ruta: '/category/Casas',
        },
        {
            texto:'Fincas',
            ruta:'/category/Fincas',
        },
        {
            texto:'Oficinas',
            ruta:'/category/oficinas',
        },
        {
            texto:'Espacios',
            ruta:'/category/espacios',
        },

        {
            texto:'Servicios',
            ruta:'/category/servicios',
        },

        {
            texto:'Partners',
            ruta:'/category/partner',
        },

    ]

    const qty = 0;

    return (
        <div className="headnav">
            <div className="container">
                <nav>
                    <ul>
                        {
                            menuItems.map((seccion, index) => <NavItem key={index} text={seccion.texto} url={seccion.ruta} />)
                        }
                    </ul>
                    {
                        !!qty && <Carrito action={action} qty={qty} />
                    }

                </nav>
            </div>
        </div>
    )
}

export default Nav;