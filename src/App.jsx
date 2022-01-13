import './App.css';
import HomePage from './Components/Home/HomePage';
import { Routes, Route } from "react-router-dom";
import Products from './Components/Products/Products';
import ProductPage from './Components/Product/ProductPage';
import './Styles/main.scss'
import Cart from './Components/Cart/Cart';
import Checkout from './Components/Checkout/Checkout';
import Login from './Components/Login/Login';
import Account from './Components/Account/Account';
import About from './Components/About/About';
function App() {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/about" element={<About/>} />
                <Route exact path="/products" element={<Products/>} />
                <Route exact path="/product/:product_id" element={<ProductPage/>} />
                <Route exact path="/login" element={<Login/>} />
                <Route exact path="/cart" element={<Cart/>} />
                <Route exact path="/account" element={<Account/>} />
                <Route exact path="/cart" element={<Cart/>} />
                <Route exact path="/checkout" element={<Checkout/>} />
                <Route path="*" element={<HomePage/>}/>
            </Routes>
        </>
    );
}

export default App;
