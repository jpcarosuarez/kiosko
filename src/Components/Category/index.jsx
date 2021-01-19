import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ProductsList from './ProductList';
import './category.css';
import {getFirestore} from '../../db';
import {products} from '../../products'

const Category = () => {
    const {category_name} = useParams();
    const [prods, setProds] = useState([]);
    const db = getFirestore();

    useEffect(() => {
        if(category_name) {
            db.collection('inmuebles').where('category', '==', category_name).get()
            .then(response => {
                let arr = [db];
                response.forEach(doc => {
                    arr.push({id: doc.id, data: doc.data()})
                })
                
                setProds(arr)
            })

        }

    }, [category_name])

    return (
        <section className="category">
            <h2>{category_name.split('-').join(' ')}</h2>
            <ProductsList products={prods} />
        </section>
    )
}

export default Category;