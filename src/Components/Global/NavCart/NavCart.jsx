import {useContext} from 'react';

import './NavCart.css';
import {BiBuildingHouse} from 'react-icons/bi';
import {Store} from '../../../store';


const NavCart = ({action}) => {
    const [data, setData] = useContext(Store);

    return (
        <div className="navCart" onClick={action}>
            <BiBuildingHouse />
            
            <span><strong>{data.cantidad}</strong></span>
        </div>
    )
}

export default NavCart;