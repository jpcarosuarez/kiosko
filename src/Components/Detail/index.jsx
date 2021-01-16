import {useEffect, useState} from 'react';
import ProductDetail from './ProductDetail';
import {useParams, Link} from 'react-router-dom';
import Comments from './Comments';
import './Detail.css';
import {getFirestore} from '../../db';

function Detail() {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const db = getFirestore();


    useEffect(() => {
        db.collection('inmuebles').doc(id).get()
        .then(doc => {
            if(doc.exists) {
                setItem(doc.data());
            }
        })
        .catch(e => console.log(e));

     
    }, []);


    return (
        <>
            {item ?
                <div className="container">

                    <ol className="breadcrum">
                        <li>
                            <Link to={`/${item.categoria}`}>{item.categoria.split('-').join(' ')}</Link>
                        </li>
                        <li>
                            {item.titulo}
                        </li>
                    </ol>
                    <ProductDetail item={item} />
                    <Comments />

                </div> :
                <p>Cargando Inmuebles...</p>}
        </>
    );
}
export default Detail;