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
                <div className="foro">
                    <div>
                        <Button variant="outlined" href="/chat"><h1>Video Chat </h1> </Button>
                    </div>
                </div>
                <div className="calendario"><h1>Agenda</h1><ScheduleCalendar /></div>
                <div className="perfil"><h1>Mi Perfil</h1></div>
                <div className="servicios"><h1>Foro Inmobiliario</h1></div>
                <div className="tareas"><h1>Mis Inmuebles</h1></div>
                <div className="mensajes"></div>

            </div>

        </section>
    )

};

export default Grid;