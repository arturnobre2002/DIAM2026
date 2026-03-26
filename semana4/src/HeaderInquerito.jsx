const Header = () => {
    return (
        <header className="fundo-amarelo py-4 text-center">
            <div className="container">
                <h1 className="display-5 mb-3">EKLEKTIKFEST LISBOA</h1>
                <nav className="d-flex justify-content-center align-items-center gap-3">
                    <a href="/">
                        <img src="/logo.png" alt="Logo" height="40" />
                    </a>
                    <a href="/" className="btn btn-outline-dark botao-texto-castanho">Página Inicial</a>
                    <a href="candidatura.html" className="btn btn-outline-dark botao-texto-castanho">Galeria</a>
                    <a href="comprarBilhetes.html" className="btn botao-fundo-castanho">Inquerito</a>
                </nav>
            </div>
        </header>
    )
}
export default Header;