import {useEffect, useState} from 'react';
import ProductDetail from './ProductDetail';
import {useParams, Link} from 'react-router-dom';
import Comments from './Comments';
import {products} from '../../products';
import './Detail.css';


function Detail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    const getProduct = new Promise((resolve, reject) => {
        const selectedProduct = products.filter(item => item.id === parseInt(id));
        resolve(selectedProduct[0]);
    });

    useEffect(() => {
        getProduct
            .then(response => setProduct(response))
            .catch(error => console.log(error));
        // eslint-disable-next-line
    }, []);


    return (
        <>
            {product ?
                <div className="container">

                    <ol className="breadcrum">
                        <li>
                            <Link to={`/${product.category}`}>{product.category.split('-').join(' ')}</Link>
                        </li>
                        <li>
                            {product.title}
                        </li>
                    </ol>
                    <ProductDetail item={product} />
                    <Comments />

                </div> :
                <p>Cargando Inmuebles...</p>}
        </>
    );
}
export default Detail;