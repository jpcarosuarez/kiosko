import {useContext} from 'react';

import './NavCart.css';
import {BiBuildingHouse} from 'react-icons/bi';
import {Store} from '../../../store';


const NavCart = ({action}) => {
    const [data, setData] = useContext(Store);
    const items = [...data.items];

    return (
        <div className="navCart" onClick={action}>
            <BiBuildingHouse />
            {
            data.items.length ?
                items.map((items) => (<span key={items.id}><strong>{items.quantity}</strong></span>)): <span><strong>0</strong></span>
            }
            
        </div>
    )
}

export default NavCart;