import './grid.css';
import ScheduleCalendar from '../../../Global/Calendario';
import Button from '@material-ui/core/Button';
import {BiBuildingHouse} from 'react-icons/bi';

const Grid = () => {


    return(
        <section className="dashboardGrid">
            <div className="grid-container">
                <div className="calendario"><h1>Calendario</h1></div>
                <div className="perfil"><h1>Mi Perfil</h1></div>
                <div className="avisos"><h1>Avisos / Requerimientos</h1></div>
                <div className="pagos-y-Cobros"><h1>Aliados</h1></div>
                <div className="publicatu-alojamiento"><h1>Publicar Inmueble</h1><Button variant="outlined" href="/publicar"><p><BiBuildingHouse /> Publicar</p> </Button></div>
                <div className="foro"> <h1>Foro</h1></div>
                <div className="calendario"><h1>Calendario</h1><ScheduleCalendar /></div>
                <div className="perfil"><h1>Mi Perfil</h1></div>
                <div className="servicios"><h1>Servicios</h1></div>
                <div className="tareas"><h1>Tareas</h1></div>
                <div className="mensajes"><h1>Mensajes</h1></div>

            </div>

        </section>
    )

};

export default Grid;