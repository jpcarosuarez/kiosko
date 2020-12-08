import './App.css';
import Nav from './Components/Global/Nav/nav';
import Modal from './Components/Global/Modal/modal';
import Carrito from './Components/Global/Carrito/carrito';
import { BiClinic, BiCart } from "react-icons/bi";


function App() {
  const cartelSaludo = () => {
    alert('Hola mundo');
  }

  return (
    <>
      <>
        <>
          <a href="#modal"><BiClinic />Publicar Propiedad</a>
          <Modal>
            <h2>Bienvenidos al Kiosko del Hogar</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam nostrum quis sit? Facere consectetur ab pariatur, culpa reprehenderit quisquam natus, doloremque magni consequatur alias quaerat soluta blanditiis sit. Non, unde.</p>
          </Modal>
        </>
        <>
          <a href="#carrito"><BiCart />Carrito</a>

          <Carrito>
            <h2>Bienvenidos al Kiosko del Hogar</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam nostrum quis sit? Facere consectetur ab pariatur, culpa reprehenderit quisquam natus, doloremque magni consequatur alias quaerat soluta blanditiis sit. Non, unde.</p>
          </Carrito>
        </>
      </>
      <Nav titulo="Kiosko Inmobiliario" action={cartelSaludo}/>
      


    </>
  );
}


export default App;
