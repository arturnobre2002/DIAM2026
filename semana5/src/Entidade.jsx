

function Entidade({nome, img, descricao, data}) {
    return(
        <article className="card mb-4">
            <div className="card-body">
                <img src={img} alt={nome} className="" />

                <h3 className="">{nome}</h3>
                <p className=""><strong>Atuação:</strong> {data}</p>
                <p className="">{descricao}</p>

            </div>

        </article>
    )
}

export default Entidade