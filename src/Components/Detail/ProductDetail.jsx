import './ProductDetail.css';
import DatePickers from './../Global/Reservas/index';
import {Store} from './../../store';
import {useHistory} from 'react-router-dom';
import {useState, useContext} from 'react';



const ProductDetail = ({item}) => {
    const history = useHistory();

    const [data, setData] = useContext(Store);
    const [qty, setQty] = useState(1);	

    const handleClickResta = () => {	
        if(qty > 1) {	
            setQty(qty - 1);	
        }	
    }

    const onAdd = () => {
        setData({
            ...data, 
            cantidad: data.cantidad + qty,
            items: [...data.items, item],
        });
        history.push('/cart');
        // alert(`Agregaste ${qty} productos al carrito`);
    };

    console.log(data);



    return (

        <article className="productDetail">
            <div>

                <div className="foto">
                    <img src="http://placehold.it/400x400" alt=""/>

                </div>

                <div className="info" >

                    <h1 className="title">{item.title} - {item.id}</h1>
                    {
                    !!item.description && <p className="description">{item.descripcion}</p>
                    }
                    <p className="price">${item.precio}</p>





                </div>
                      
                <DatePickers />

                <div className="qty">	
                    <button 	
                        disabled={qty === 1 ? 'disabled' : null } 	
                        onClick={handleClickResta}	
                    >	
                        -	
                    </button>	
                    <input type="text" value={qty} readOnly/>	
                    <button onClick={() => setQty(qty + 1)}>+</button>	
                </div>


               
                <button className="btn" onClick={onAdd}>Agregar al carrito</button>

            </div>

        </article>
    );
}

export default ProductDetail;