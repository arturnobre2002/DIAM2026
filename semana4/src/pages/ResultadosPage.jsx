import { useLocation, useNavigate } from "react-router-dom";
import Header from "../Header.jsx";
import Footer from "../Footer.jsx";

function ResultadosPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const { escolha } = location.state;

    const bandas = ["Dire Straits", "Fontaines D.C.", "Pink Floyd", "Placebo", "Radiohead", "The Marías"];
    const votos = JSON.parse(localStorage.getItem("votos")) || {};

    return (
        <>
            <Header />
            <div className="d-flex flex-column align-items-center my-4">
                <h2>O teu artista favorito:</h2>
                <h3>{escolha}</h3>
                <br/>
                <h4 className="mb-4">Resultados acumulados:</h4>
                {bandas.map((banda) => (
                    <p key={banda}>{banda}: {votos[banda] || 0} votos</p>
                ))}
                <br/>
                <button className="btn botao-texto-castanho" onClick={() => navigate("/inquerito")}>Voltar</button>
            </div>
            <Footer />
        </>
    );
}

export default ResultadosPage;