import Entidade from './Entidade.jsx';
import dados from './entidades.json';

function Galeria() {
    const listaArtistas = dados.entidades;

    return(
        <section className="container my-5">
            <div className="text-center mb-5">
                <div className="row g-4">

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

            </div>
        </section>
    )
}

export default Galeria;