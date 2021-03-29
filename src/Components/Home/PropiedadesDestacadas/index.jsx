import {useState, useEffect, memo} from 'react';
import ProductCard from './../../Global/ProductCard/ProductCard';
import './PropiedadesDestacadas.css';
import {getFirestore} from '../../../db';
import { Container, Row, Col } from 'react-bootstrap';

const PropiedadesDestacadas = () => {
    const [items, setItems] = useState([]);
    const db = getFirestore();


    const getProductsFromDB = () => {
        db.collection('inmuebles').where("outstanding", "==", true).get()
        .then(docs => {
            let arr = [];
            docs.forEach(doc => {
                arr.push({id: doc.id, data: doc.data()})
            })

            setItems(arr);
        })
        .catch(e => console.log(e));

    }


    useEffect(() => {
        getProductsFromDB();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <Container className="propiedadesDestacadas">
            <h1>Arrienda Simple y Fácil</h1>

            <Col className="container">
                {
                    items.length ? 
                    <>

                        <ul>
                            {
                                items.map((item) => (
                                    <li key={item.id}>
                                        <ProductCard
                                            id={item.id}
                                            img={item.data.img}
                                            titulo={item.data.titulo}
                                            ubicacion={item.data.ubicacion}
                                            direccion={item.data.direccion}
                                            ciudad={item.data.ciudad}
                                            habitaciones={item.data.habitaciones}
                                            baños={item.data.baños}
                                            area={item.data.area}
                                            categoria={item.data.categoria}
                                            precio={item.data.precio} 
                                        />
                                    </li>
                                ))
                            }
                        </ul>
                    </> :
                    <p className="cargando">Cargando Propiedades...</p>

                }
                

            </Col>
            
        </Container>
    )
}
 
export default memo(PropiedadesDestacadas);
