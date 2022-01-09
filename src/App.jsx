import './App.css';
import HomePage from './Components/Home/HomePage';
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
            </Routes>
        </>
    );
}

export default App;
