import './App.css';
import HomePage from './Components/Home/HomePage';
import { Routes, Route } from "react-router-dom";
import Products from './Components/Products/Products';

function App() {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/products" element={<Products/>} />

            </Routes>
        </>
    );
}

export default App;
