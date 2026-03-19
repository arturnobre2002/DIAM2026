import { useState } from "react";

function Inquerito() {
    const bandas = ["Dire Straits", "Fontaines D.C.", "Pink Floyd", "Placebo", "Radiohead", "The Marías"];
    const [escolha, setEscolha] = useState("");

    function submeter() {
        if (escolha !== "") {
            alert("A banda escolhida foi: " + escolha);
        } else {
            alert("Por favor, selecione uma banda antes de submeter.");
        }
    }

    return (
        <div>
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

            <br />

            <button onClick={submeter}>Submeter</button>
        </div>
    );
}

export default Inquerito;
