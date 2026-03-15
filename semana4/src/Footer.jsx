const Footer = () => {
    return (
        <footer className="fundo-castanho py-5 mt-5 text-center">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <h3 className="text-white">Contactos</h3>
                        <p>Telefone: <a href="tel:+351219875784">219875784</a></p>
                        <p>Email: <a href="mailto:eklektikfest@ekfest.pt">eklektikfest@ekfest.pt</a></p>
                    </div>
                    <div className="col-6">
                        <h3 className="text-white">Eventos relacionados</h3>
                        <p><a href="https://eklektikfestbarcelona.com">Eklektikfest Barcelona</a></p>
                        <p><a href="https://eklektikfestrio.com">Eklektikfest Rio</a></p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;