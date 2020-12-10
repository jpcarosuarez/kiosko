import './App.css';
import Nav from './Components/Global/Nav/nav';
//import Carrito from './Components/Global/Carrito/carrito';
import Menu from './Components/Global/Menu/menu';
// import Topbar from './Components/Global/Topbar/topbar';
//import logo from '.Components/Global/Images/logoblack.png';

//import { BiCart } from "react-icons/bi";


function App() {
  //const cartelSaludo = () => {
  //  alert('Hola mundo');
  //}

  return (
    <>
      <Menu />
      <Nav /*action={cartelSaludo}*/ />
      
    </>
  );
}


export default App;
