import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import ShopContextProvider from './Context/ShopContext';
import LoginSignup from './Pages/LoginSignup';
function App() {
  return (
    <div >
      <ShopContextProvider> 
      <BrowserRouter> 
      <Navbar />
      <Routes>
      <Route path='/' element={<Home />}  />
      <Route path='/exterior-parts' element={<ShopCategory category="exterior-parts"/>}  />
      <Route path='/interior-parts' element={<ShopCategory category="interior-parts"/>}  />

      <Route path='/contact' element={<ShopCategory category="contacts"/>}  />
      <Route path ="/product" element={<Product />} />
      <Route path='/product/:productid' element={<Product/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/login' element={<LoginSignup />} />
      </Routes>
      <Footer />
      </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
}

export default App;