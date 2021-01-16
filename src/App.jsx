import {useState} from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Footer from './Components/Global/Footer/Footer';
import Nav from './Components/Global/Nav/nav';
import Home from './Components/Home';
import Category from './Components/Category';
import Detail from './Components/Detail';
import Error404 from './Components/Global/Error404';
import Cart from './Components/Cart/cart';
import Checkout from './Components/Checkout';
import NavAndWidgetCart from './Components/Global/NavAndWidgetCart/NavAndWidgetCart';
import {Store} from './store';


function App() {
  const [data, setData] = useState({
    items: [],
    cantidad: 0,
    freeShipping: "75.000",
    cuotas: 5,
  })

  return (
    <Store.Provider value={[data, setData]}>
      <BrowserRouter>
      
        <NavAndWidgetCart />

        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route exact path="/categoria/:nombre_categoria">
            <Category />  
          </Route>  
          <Route exact path="/:nombre_categoria/:id">
            <Detail />
          </Route>
          <Route path="*">
            <Error404 />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>

    </Store.Provider>

  ); 
}  


  
export default App;
 