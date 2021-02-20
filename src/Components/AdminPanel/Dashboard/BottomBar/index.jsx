import {Link} from 'react-router-dom';


import './bottomBar.css';


const BottomBar = () => {


    return (

        <div className="BottomBar">
            <div className="menuBottom">
                <div><Link to={"/inmueblesDelUsuario"}><h1>Inmuebles</h1></Link> </div>
                <div><Link to={"/agendaDelUsuario"}><h1>Agenda</h1></Link></div>
                <div><Link to={"/agendaDelUsuario"}><h1>Captacion</h1></Link> </div>
                <div><Link to={"/agendaDelUsuario"}><h1>Solicitudes</h1></Link></div>
            </div>
         
        </div>

    )
}

export default BottomBar;