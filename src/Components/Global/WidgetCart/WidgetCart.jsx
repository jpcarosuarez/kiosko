import {useContext} from 'react';
import './WidgetCart.css';
import {Store} from '../../../store';


const WidgetCart = ({show, action}) => {
    const [data] = useContext(Store);
    console.log(data);
      

    return (
        <div className={`widgetCart ${show ? 'open' : 'close'}`}>
            <button className="centrar" onClick={action}><strong>X</strong></button>
            <h1>Checkout</h1>
            {
                data.items.map(item => <p key={item.id}>{item.item.titulo}</p>)
            }
        </div>
    )
}

export default WidgetCart;