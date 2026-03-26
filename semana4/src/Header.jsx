import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate=useNavigate();

    return (
        <header className="fundo-amarelo py-4 text-center">
            <div className="container">
                <h1 className="display-5 mb-3">EKLEKTIKFEST LISBOA</h1>
                <nav className="d-flex justify-content-center align-items-center gap-3">
                    <img src="/logo.png" onClick={() => navigate("/")} alt="Logo" style={{ cursor: "pointer", height: '40px'}}/>
                    <button onClick={() => navigate("/")} className="btn btn-outline-dark botao-texto-castanho">Página Inicial</button>
                    <button onClick={() => navigate("/galeria")} className="btn btn-outline-dark botao-texto-castanho">Galeria</button>
                    <button onClick={() => navigate("/inquerito")} className="btn btn-outline-dark botao-texto-castanho">Inquérito</button>
                </nav>
            </div>
        </header>
    )
}
export default Header;