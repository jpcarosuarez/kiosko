import {useState} from 'react';
import ProductCard from '../../Global/ProductCard/ProductCard';
import './ProductList.css';
import {BsListUl, BsFillGridFill} from 'react-icons/bs';
import { Container, Row, Card } from 'react-bootstrap';

const ProductsList = ({inmuebles}) => {
    const [wayToShow, setWayToShow] = useState(true);

    return (
        <Container className="products">
            <Row className="wayToShow">
                {
                    wayToShow ? 
                    <BsListUl onClick={() => setWayToShow(!wayToShow)} title="Ver como lista" /> :
                    <BsFillGridFill onClick={() => setWayToShow(!wayToShow)} title="Ver como grilla" />
                }
            </Row>

            <Row className={`products_list ${wayToShow ? 'grid' : 'list'}`}>
                {
                    inmuebles.map(item => <li key={item.id}>
                        <ProductCard id={item.id} img={item.data.img} titulo={item.data.titulo} precio={item.data.precio} direccion={item.data.direccion} ciudad={item.data.ciudad} ubicacion={item.data.ubicacion} area={item.data.area} habitaciones={item.data.habitaciones} baños={item.data.baños} categoria={item.data.categoria} type={`${wayToShow ? 'grid' : 'list'}`} /></li>)
                }
            </Row>
        </Container>
    )
}

export default ProductsList;