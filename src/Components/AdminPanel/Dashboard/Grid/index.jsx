import './grid.css';
import ScheduleCalendar from '../../../Global/Calendario';
import Button from '@material-ui/core/Button';
import {BiBuildingHouse} from 'react-icons/bi';

const Grid = () => {


    return(
        <section className="dashboardGrid">
            <div className="grid-container">
                <div className="perfil"><h1>Mi Perfil</h1></div>
                <div className="avisos"><h1>Nuevos clientes interesados</h1></div>
                <div className="pagos-y-Cobros"><h1>Mensajes</h1></div>
                <div className="publicatu-alojamiento"><h1>Publicar Inmueble</h1><Button variant="outlined" href="/publicar"><p><BiBuildingHouse /> Publicar</p> </Button></div>
                <div className="foro"> <h1>Nuevos inmuebles para compartir</h1></div>
                <div className="calendario"><h1>Agenda</h1><ScheduleCalendar /></div>
                <div className="perfil"><h1>Mi Perfil</h1></div>
                <div className="servicios"><h1>Foro Inmobiliario</h1></div>
                <div className="tareas"><h1>Mis Inmuebles</h1></div>
                <div className="mensajes"><h1></h1></div>

            </div>

        </section>
    )

};

export default Grid;