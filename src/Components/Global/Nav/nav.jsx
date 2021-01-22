import './nav.css';
import NavItem from '../NavItem/navItem';


function Nav() {

    const menuItems = [

        {
            texto:'Arriendos Mensuales',
            ruta:'/mensual',
        },

        {
            texto:'Arriendos 6 meses o +',
            ruta:'/mensual+6',
        },

        {
            texto:'Espacios por Horas',
            ruta:'/horas',
        },
        {
            texto:'Shop',
            ruta:'/shop',
        },
        {
            texto:'Contacto',
            ruta:'/contacto',

        },

    ]

    


    return (
        <div className="headnav">
            <div className="container">

                <h1>Descubre el arriendo perfecto.</h1>

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