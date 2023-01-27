import './App.css';
import Home from './component/Home';
import Login from './component/Login';
import Register from './component/Register';
import {BrowserRouter,Routes ,Route } from 'react-router-dom';
import Products from './component/Products';
import Cart from './component/Cart';
import WishList from './component/WishList';
import Navbar2 from './component/Navbar2';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/wishlist' element={<WishList/>}/>
      <Route path='/navbar2' element={<Navbar2/>}/>

    </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;
