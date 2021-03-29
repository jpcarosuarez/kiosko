
import { Container, Row, Card } from 'react-bootstrap';
import './_layout.scss';

const Layout = () => {

    return(

    <Container>

        <Row>
            <Card border="primary" style={{ width: '18rem' }} >
                <Card.Header><h1>Calendario</h1></Card.Header>
                <Card.Body>
                    <Card.Title>Titulo Calendario</Card.Title>
                    <Card.Text>Texto Calendario</Card.Text>
                </Card.Body>
            </Card>
            
            <Card border="primary" style={{ width: '18rem' }} >
                <Card.Header><h1>Mensajes</h1></Card.Header>
                <Card.Body>
                    <Card.Title>Titulo</Card.Title>
                    <Card.Text>Texto</Card.Text>
                </Card.Body>
            </Card>

            <Card border="primary" style={{ width: '18rem' }} >
                <Card.Header><h1>Calendario</h1></Card.Header>
                <Card.Body>
                    <Card.Title>Titulo Calendario</Card.Title>
                    <Card.Text>Texto Calendario</Card.Text>
                </Card.Body>
            </Card>
            <Card border="primary" style={{ width: '18rem' }} >
                <Card.Header><h1>Foro Inmobiliario</h1></Card.Header>
                <Card.Body>
                    <Card.Title>Requisitos | Propuestas</Card.Title>
                    <Card.Text>Encuentra junto a tus aliados </Card.Text>
                </Card.Body>
            </Card>
            <Card border="primary" style={{ width: '18rem' }} >
                <Card.Header><h1>Resumen </h1></Card.Header>
                <Card.Body>
                    <Card.Title>Pagos y Cobros</Card.Title>
                    <Card.Text>Movimientos</Card.Text>
                </Card.Body>
            </Card>
        </Row>

    </Container>

    )

}

export default Layout;



