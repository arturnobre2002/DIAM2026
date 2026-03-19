

function Entidade({nome, img, descricao, data}) {
    return(
        <article className="card h-100">
            <div className="card-body d-flex flex-column">
                <img src={img} alt={nome} className="card-img-top object-fit-cover" style={{ height: '250px'}}/>

                <h3 className="card-title h5">{nome}</h3>
                <p className="card-text"><strong>Atuação:</strong> {data}</p>
                <p className="card-text flex-grow-1">{descricao}</p>

            </div>

        </article>
    )
}

export default Entidade