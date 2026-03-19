import Entidade from './Entidade.jsx';
import dados from './entidades.json';

function Galeria() {
    const listaArtistas = dados.entidades;

    return(
        <section className=""> {/* Podes meter um "container" ou "row" aqui */}
            <div className=""> {/* Podes meter um "d-flex", "row" ou "grid" aqui */}

                {listaArtistas.map((artista, index) => (
                    <Entidade
                        key={index}
                        nome={artista.nome}
                        img={artista.img}
                        descricao={artista.descricao}
                        data={artista.data}
                    />
                ))}

            </div>
        </section>
    )
}

export default Galeria;