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