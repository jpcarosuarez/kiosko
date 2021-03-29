import {useContext} from 'react';

import './NavCart.scss';
import {BiBuildingHouse} from 'react-icons/bi';
import {Store} from '../../../store';


const NavCart = ({action}) => {
    const [data, setData] = useContext(Store);
    
    let total = 0;
    data.items.forEach(element => { total += element.quantity;});
    return (
        <div className="navCart" onClick={action}>
            <BiBuildingHouse />
           <span><strong>{total}</strong></span>      
        </div>
    )
}

export default NavCart;