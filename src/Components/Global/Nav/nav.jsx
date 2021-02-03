import './nav.css';
import NavItem from '../NavItem/navItem';


function Nav() {

    const menuItems = [

        {
            texto:'Arriendos Mensuales',
            ruta:'/mensual',
        },

        {
            texto:'Arriendos Diarios',
            ruta:'/dias',
        },

        {
            texto:'Espacios por Horas',
            ruta:'/horas',
        },
        {
            texto:'Contacto',
            ruta:'/contacto',

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