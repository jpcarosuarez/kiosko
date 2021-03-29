import './ProductCard.css';
import {Link} from 'react-router-dom';
import { IoLogoUsd } from "react-icons/io";
import { FaBed, FaBath } from "react-icons/fa";
import { MdGpsFixed } from "react-icons/md";
import { RiRuler2Line } from "react-icons/ri";
import { Container, Row, Col, Card } from 'react-bootstrap';

import Imagen from "../Imagen/imagen";

const ProductCard = ({id, titulo, img, ubicacion, ciudad, categoria, direccion, area, precio, habitaciones, baños, type='grid'}) => {
   
    
    return (
        <Container>
            <Row>
                <Card className={`productCard ${type}`} >
                    <Link to={`/${categoria}/${id}`}>
                
                        <Row>
                            <Card style={{ width: '17rem' }}>
                                <Imagen src={img} alt={titulo}/>             
                            </Card>

                        </Row>

                        <Row className="titulo" >
                            <h1>{titulo}</h1>   
                        </Row>
            
                        <Row className="info">

                            <Row>
                                <p><MdGpsFixed size={20}/> {ubicacion}</p>
                                <p>{ciudad} {direccion}</p>
                                <p><IoLogoUsd size={20} /> {precio}</p>
                                <p><FaBed size={20}/> {habitaciones}</p>
                                <p><FaBath size={20}/> {baños}</p>
                                <p><RiRuler2Line size={20}/> {area} m2</p>
                            </Row>
            
            
                            <Row className="button" >
                                Ver detalle
            
                            </Row>

                        </Row>
            

                    </Link>

                </Card>
            </Row>
        </Container>



    )
}

export default ProductCard;