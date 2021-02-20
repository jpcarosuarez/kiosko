import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ProductsList from './ProductList';
import './category.css';
import {getFirestore} from '../../db';

const Category = () => {
    const {category_name} = useParams();
    const [inmuebles, setInmuebles] = useState([]);
    const db = getFirestore();

    useEffect(() => {
        if(category_name) {
            db.collection('inmuebles').where('categoria', '==', category_name).get()
            .then(response => {
                let arr = [];
                response.forEach(doc => {
                    arr.push({id: doc.id, data: doc.data()})
                })
                
                setInmuebles(arr)
            })
            

        }


    }, [category_name])

    return (
        <section className="category">
            <h1>Encuentra y Arrienda Facil</h1>
            <h2>Tipo de Arriendo : {category_name.split('-').join(' ')}</h2>
            <ProductsList inmuebles={inmuebles} />
        </section>
    )
}

export default Category;