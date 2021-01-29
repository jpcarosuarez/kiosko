import './menu.css';
import {useContext} from 'react';
import Logo from './img/logowhite.png';
import {Link} from 'react-router-dom';
import {Store} from '../../../store';
import NavCart from '../NavCart/NavCart';
import {BiBuildingHouse, BiUserCircle} from 'react-icons/bi';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    root: {
      '& > *': {
        margin: theme.spacing(1),
        color: 'white',
        display: 'flex',

      },
    },
}));

function Menu({action}) {
    const [data] = useContext(Store); 
    const classes = useStyles();

    return (
        <div className="top">
            <div className={classes.root}>
            
                <Button href="/login"><BiUserCircle /> Ingreso </Button>

                <Button variant="outlined" href="/publicar"><BiBuildingHouse /> Publicar </Button>
              
            </div>
            
            <div className="logoTop">
                <Link to={"/"} ><img className="logoblanco" src={Logo} alt="logo" /></Link>
                   

            </div>

            <div>
                <NavCart action={action} />

            </div>

        </div>
       
    )
}
export default Menu;