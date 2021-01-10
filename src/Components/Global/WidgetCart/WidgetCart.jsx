import './WidgetCart.css';
import Button from '@material-ui/core/Button';

const WidgetCart = ({show, action}) => {
    

    return (
        <div className={`widgetCart ${show ? 'open' : 'close'}`}>
            <h1>Checkout</h1>

            <Button variant="contained" onClick={action}>Cerrar</Button>

        </div>
    )
}

export default WidgetCart;