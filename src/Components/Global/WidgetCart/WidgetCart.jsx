import {useContext} from 'react';
import './WidgetCart.css';
import {Store} from '../../../store';
import Button from '@material-ui/core/Button';

const WidgetCart = ({show, action}) => {
    const [data] = useContext(Store);
    console.log(data);
      

    return (
        <div className={`widgetCart ${show ? 'open' : 'close'}`}>
            <Button className="centrar" variant="contained" onClick={action}><strong>X</strong></Button>

            <h1>Checkout</h1>

            {
                data.items.map(item => <p key={item.id}>{item.item.titulo}</p>)
            }


        </div>
    )
}

export default WidgetCart;