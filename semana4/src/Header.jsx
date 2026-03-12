import { Container, Button } from 'react-bootstrap'

const Header = () => {
    return (
        <header className="fixed-top" style={{ backgroundColor: "#fdfbd4"}}>
            <Container className="text-center py-3">
                <h1>EKLEKTIKFEST LISBOA</h1>
                <nav className="d-flex justify-content-center align-items-stretch gap-3">
                    <a href="/">
                        <img src="logo.png" alt="Logo"/> 
                    </a>
                    <a href="/" className="btn h-100 py-3 btn-dark">Página Inicial</a>
                    <span className="align-self-center">|</span>
                    <a href="candidatura.html" className="btn h-100 py-3 btn-light">Candidatura</a>
                    <span className="align-self-center">|</span>
                    <a href="comprarBilhetes.html" className="btn h-100 py-3 btn-light">Comprar Bilhetes</a>
                </nav>
            </Container>
        </header>
    )
}

export default Header;