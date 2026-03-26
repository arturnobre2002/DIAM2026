import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Inquerito() {
    const bandas = ["Dire Straits", "Fontaines D.C.", "Pink Floyd", "Placebo", "Radiohead", "The Marías"];
    const [escolha, setEscolha] = useState("");
    const navigate = useNavigate();

    function submeter() {
        if (escolha !== "") {
           const votos = JSON.parse(localStorage.getItem("votos")) || {};
           votos[escolha] = (votos[escolha] || 0) + 1; //se não existe, assumimos 0 pontos
           localStorage.setItem("votos", JSON.stringify(votos));

           navigate("/resultados" , {state: { escolha }});
        } else {
            alert("Por favor, selecione uma banda antes de submeter.");
        }
    }

    return (
        <div className="d-flex flex-column align-items-center my-4">

            <h1>Inquérito</h1>

            <fieldset>
                <legend>Banda favorita:</legend>
                {bandas.map((banda) => (
                    <div key={banda}>
                        <input
                            type="radio"
                            name="banda"
                            value={banda}
                            id={banda}
                            checked={escolha === banda}
                            onChange={(e) => setEscolha(e.target.value)}
                        />
                        <label htmlFor={banda}>{banda}</label>
                    </div>
                ))}
            </fieldset>

            <br/>

            <button onClick={submeter} className="btn botao-texto-castanho">Submeter</button>
            <br/><br/>
        </div>
    );
}

export default Inquerito;
