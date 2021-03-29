import './nav.css';
import NavItem from '../NavItem/navItem';
import { Container, Col, Row, Form, Button, Dropdown } from 'react-bootstrap';



function Nav() {

    const menuItems = [

        {
            texto:'Arriendos Mensuales',
            ruta:'/mensual',
        },

        {
            texto:'Arriendos Diarios',
            ruta:'/dias',
        },

        {
            texto:'Espacios Por Horas',
            ruta:'/horas',
        },

    ]

    


    return (
        
        <Container className="headnav">

            <Row >   
                <Col>
                    <Dropdown variant="primary">
                        <Dropdown.Toggle>
                            Arriendos
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Divider />

                            <p>Arrienda Fácil</p>
                            {
                                menuItems.map((seccion, index) => <NavItem key={index} text={seccion.texto} url={seccion.ruta} />)
                            }                            
                            <Dropdown.Divider />
                            <Dropdown.Item href="#arriendos">Apartamentos en Arriendo</Dropdown.Item>
                            <Dropdown.Item href="#arriendos">Casas en Arriendo</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#arriendos">Ver todos los Arriendos</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#publicar">Publicar un arriendo</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>

                <Col>            
                    <Dropdown variant="primary">
                        <Dropdown.Toggle>
                            Comprar
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#arriendos">Apartamentos en Venta</Dropdown.Item>
                            <Dropdown.Item href="#arriendos">Casas en Venta</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#arriendos">Ver todas las ventas</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#arriendos">Publicar una venta </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col>            
                    <Dropdown variant="primary">
                        <Dropdown.Toggle>
                            Buscador de Agentes
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                        <Dropdown.Divider />
                            <Dropdown.Item href="#arriendos">Agentes de Bienes Raices</Dropdown.Item>
                            <Dropdown.Item href="#arriendos">Administracion de Propiedades</Dropdown.Item>
                            <Dropdown.Item href="#arriendos">Seguros inmobiliarios</Dropdown.Item>
                            <Dropdown.Item href="#arriendos">Propiedad Horizontal</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#arriendos">Remodelaciones</Dropdown.Item>
                          
                            <Dropdown.Divider />
                            <Dropdown.Item href="#arriendos">Crea una cuenta de agente gratuito</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>

                <Col>
                    <Form inline>
                        <Form.Group controlId="search"> 
                            <Form.Control type="text" placeholder="Dirección, Ciudad, Localidad" className="mr-sm-2" />
                            <Button type="submit">Buscar</Button>
                        </Form.Group>
                    </Form> 
                    
                </Col>           

            </Row>



        </Container>  
        

                         

    )
}

export default Nav;