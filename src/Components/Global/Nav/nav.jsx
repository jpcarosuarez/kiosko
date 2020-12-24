import './nav.css';
import NavItem from '../NavItem/navItem';
import Carrito from '../Carrito/carrito';

 
function Nav({titulo, action}) {
    const menuItems = [
        {
            texto:'Ventas',
            ruta: '/category/ventas',
        },
        {
            texto:'Arriendos',
            ruta:'/category/arriendos',
        },
        {
            texto:'Remates',
            ruta:'/category/remates',
        },
        {
            texto:'Permutas',
            ruta:'/category/permutas',
        },
        {
            texto:'Amoblados x días',
            ruta:'/category/amoblados',
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