import './nav.css';
import NavItem from '../NavItem/navItem';

 
function Nav() {
    const menuItems = [
        {
            texto:'Apartamentos',
            ruta: '/apartamentos',
        },        
        {
            texto:'Casas',
            ruta: '/casas',
        },
        {
            texto:'Fincas',
            ruta:'/fincas',
        },
        {
            texto:'Espacios',
            ruta:'/espacios',
        },
        {
            texto:'Busco Roomates',
            ruta:'/roomates',
        },
        {
            texto:'Tienda',
            ruta:'/tienda',
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