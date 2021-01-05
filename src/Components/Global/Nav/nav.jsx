import './nav.css';
import NavItem from '../NavItem/navItem';

 
function Nav() {
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
            texto:'Oficinas',
            ruta:'/category/oficinas',
        },
        {
            texto:'Espacios x Hrs',
            ruta:'/category/espacios',
        },
        {
            texto:'',
            ruta:'/category/servicios',
        },
        {
            texto:'Roomates',
            ruta:'/category/roomates',
        },

    ]


    return (
        <div className="headnav">
            <div className="container">
                <nav>
                    <ul>
                        {
                            menuItems.map((seccion, index) => <NavItem key={index} text={seccion.texto} url={seccion.ruta} />)
                        }
                    </ul>


                </nav>
            </div>
        </div>
    )
}

export default Nav;