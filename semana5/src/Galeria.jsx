import Entidade from './Entidade.jsx';
import dados from './entidades.json';

function Galeria() {
    const listaArtistas = dados.entidades;

    return(
        <section className="container my-5">
            <h2 className="text-center mb-5">Galeria de Artistas</h2>
            <div className="row g-4">

                {listaArtistas.map((artista, index) => (
                    <div key={index} className="col-12 col-md-6 col-lg-4 d-flex">
                        <Entidade
                          nome={artista.nome}
                          img={artista.img}
                          descricao={artista.descricao}
                          data={artista.data}
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Galeria;