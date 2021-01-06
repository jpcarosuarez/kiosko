import {useState} from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Footer from './Components/Global/Footer/Footer';
import Nav from './Components/Global/Nav/nav';
import Menu from './Components/Global/Menu/menu';
import Home from './Components/Home';
import Category from './Components/Category';
import Detail from './Components/Detail';
import Error404 from './Components/Global/Error404';
import Cart from './Components/Cart/cart';
import Checkout from './Components/Checkout/index';

import {Store} from './store';


function App() {
  const [data, setData] = useState({
    items: [],
    cantidad: 0,
    freeShipping: 4000,
    cuotas: 3,
  })

  return (
    <Store.Provider value={[data, setData]}>
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

    </Store.Provider>

  ); 
}  


  
export default App;
 