import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Nav from './Components/Global/Nav/nav';
import Menu from './Components/Global/Menu/menu';
import Home from './Components/Home';
import Category from './Components/Category';
import Detail from './Components/Detail';
import Error404 from './Components/Global/Error404';
 

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
        <Route path="/detail">
          <Detail />
        </Route>
        <Route path="*">
          <Error404 />
        </Route>
      </Switch>
    </BrowserRouter>

  ); 
}
  
export default App;
 