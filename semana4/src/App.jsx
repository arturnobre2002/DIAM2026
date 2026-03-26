import './App.css'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import GaleriaPage from "./pages/GaleriaPage.jsx";
import InqueritoPage from "./pages/InqueritoPage.jsx";
import HomePage from "./pages/HomePage.jsx";



function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/galeria" element={<GaleriaPage/>}/>
                <Route path="/inquerito" element={<InqueritoPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App