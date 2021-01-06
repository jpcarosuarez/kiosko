import './ProductDetail.css';
//import Calendario from './../Global/Calendario/Calendario'
import DatePickers from './../Global/Reservas/index';
import CountContainer from './../Global/CountContainer/CountContainer';
import {useState } from 'react';



const ProductDetail = ({item}) => {

    //Contador //////////////////////
    const qty = 7;
    const [count, setCount] = useState(0);

    const add = () => {
      if (count < qty) {
        setCount(count + 1);
      }
      if (count === qty) {
        alert("Solo esta permitido ese stock");
      }
    };

    const less = () => {
      if (count === 0) {
        alert("No se puede menos de 0");
        return;
      }
  
      setCount(count - 1);
    }; 
                        
    /////////////////////////////////////// 



    const handleClickAdd = (e) => {
        alert('Producto agregado al carrito');
    }



    return (
        <article className="productDetail">
            <div>
                       
                <h1>{item.nombre} - {item.id}</h1>
                <br />
                <DatePickers />

                <p>El id de este producto es {item.id}</p>
                <br />
                <img src={item.foto} alt=""/>
                <img src={item.foto} alt=""/>
                <img src={item.foto} alt=""/>
                <p>{item.descripcion}</p>
                <br />
                <p> $ {item.precio}</p>
                <br />
                <CountContainer count={count} add={add} less={less} />

                <button onClick={handleClickAdd}>Agregar al carrito</button>

            </div>

        </article>
    );
}

export default ProductDetail;