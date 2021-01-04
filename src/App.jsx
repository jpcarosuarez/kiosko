import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Footer from './Components/Global/Footer/Footer';
import Topbar from './Components/Global/Topbar/Topbar';
import Nav from './Components/Global/Nav/nav';
import Menu from './Components/Global/Menu/menu';
import Home from './Components/Home';
import Category from './Components/Category';
import Detail from './Components/Detail';
import Error404 from './Components/Global/Error404';
import Cart from './Components/Cart/cart';
import Checkout from './Components/Checkout/index';


function App() {

  return (
    <BrowserRouter>
      
      <Menu />

      <Nav />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/category/:category_name?">
          <Category />  
        </Route>  

        <Route path="/detail/:id">
          <Detail />
        </Route>

        <Route path="cart">
          <Cart />
        </Route>

        <Route path="checkout">
          <Checkout />
        </Route>

        <Route path="*">
          <Error404 />
        </Route>

      </Switch>

      <Footer />
  


    </BrowserRouter>

  ); 
}  


  
export default App;
 