import './ProductCard.css';
import {Link} from 'react-router-dom';

const ProductCard = ({id, title, price, category, negocio, habitaciones, baños, type='grid'}) => {
    return (
        <article className={`productCard ${type}`}>
            <img src="http://placehold.it/300x300" alt="Mi producto de prueba"/>
            <div>
                <h3>{title}</h3>
                <p>${price}</p>
                <p>{category} </p>
                <p>{negocio} </p>
                <p>{habitaciones}</p>
                <p>{baños} </p>
                <Link to={`/${category}/${id}`}>Ver detalle</Link>
            </div>
        </article>
    )
}

export default ProductCard;