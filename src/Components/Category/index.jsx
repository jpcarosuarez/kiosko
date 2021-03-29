import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ProductsList from './ProductList';
import './category.css';
import {getFirestore} from '../../db';
import { Container, Row, Col, Form, Button, Dropdown } from 'react-bootstrap';

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
    // react-hooks/exhaustive-deps
    return (
        <Container className="category">
            <h2>Encuentra y Arrienda Fácil</h2>
            <ProductsList inmuebles={inmuebles} />
        </Container>
    )
}

export default Category;