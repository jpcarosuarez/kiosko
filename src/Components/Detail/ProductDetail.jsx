import './ProductDetail.css';
//import Calendario from './../Global/Calendario/Calendario'
import DatePickers from './../Global/Reservas/index';



const ProductDetail = ({item}) => {

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
                <button onClick={handleClickAdd}>Agregar al carrito</button>

            </div>

        </article>
    );
}

export default ProductDetail;