import './menu.scss';
import {useContext} from 'react';
import Logo from './img/logoKiosko.png';
import {Link} from 'react-router-dom';
import {Store} from '../../../store';
import NavCart from '../NavCart/NavCart';
import {BiBuildingHouse, BiUserCircle} from 'react-icons/bi';
import Button from '@material-ui/core/Button';
//import SignIn from '../../Admin/index';
import { makeStyles } from '@material-ui/core/styles';
import { Nav } from 'react-bootstrap';
// const useStyles = makeStyles((theme) => ({

//     root: {
//       '& > *': {
//         margin: theme.spacing(1),
//         color: 'white',
//         display: 'flex',

//       },
//     },
// }));

function Menu({action}) {
    const [data, setData] = useContext(Store); 
    // const classes = useStyles();

    return (
    
        <Nav fill="true" className="justify-content-between top">
            <Nav.Item className="menu-left-side">
                <Button variant="outlined" className="btn-ingresar"><BiUserCircle />Ingresar</Button>
                <Button variant="outlined" href="/publicar" className="btn-publicar"><BiBuildingHouse />Publicar</Button>
            </Nav.Item>

            <Nav.Item className="logoTop">
                <Link to={"/"} ><img className="logoblanco" src={Logo} alt="logo" /></Link>
            </Nav.Item>

            <Nav.Item className="">
            </Nav.Item>

            <Nav.Item className="menu-right-side">
                <NavCart action={action} />
            </Nav.Item>
        </Nav>
        
       
    )
}
export default Menu;