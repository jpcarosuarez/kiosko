import {useState} from 'react';
import Menu from '../Menu/menu';
import WidgetCart from '../WidgetCart/WidgetCart';

const NavAndWidgetCart = () => {
    const [showWidgetCart, setShowWidgetCart] = useState(false);

    const openWidgetCart = () => {
        setShowWidgetCart(!showWidgetCart);
    }

    return (
        <>

            <Menu action={openWidgetCart} /> 

         
            <WidgetCart show={showWidgetCart} action={openWidgetCart} />
        </>
    )
}
export default NavAndWidgetCart;