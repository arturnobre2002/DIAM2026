const Intro = () => {
    return (
        <section className="text-center my-5">
            <p>
                O festival <strong>Eklektikfest Lisboa</strong> é tudo aquilo pelo que esperavas.<br/>
                Com os artistas mais inovadores e variados e os debates e convívios<br/>
                políticos mais relevantes, é algo que não podes perder.
            </p>
            <h4 id="contador" className="mt-4">A calcular tempo restante para o começo do evento...</h4>
        </section>
    )
}
export default Intro;

function atualizarContador() {
    let elemento = document.getElementById("contador");
    const dataEvento = new Date("2026-07-13T15:00:00");
    const dataAtual = new Date();

    const dif = Math.floor((dataEvento - dataAtual) / 1000);

    if (dif<0) {
        elemento.innerText = "O Eklektikfest já começou!";
        return;
    }

    const dias = Math.floor(dif / (60 * 60 * 24));
    const horas = Math.floor((dif % (60 * 60 * 24)) / (60 * 60));
    const minutos = Math.floor((dif % (60 * 60)) / 60);
    const segundos = dif % 60;

    elemento.innerText = "Faltam " + dias + " dias, " + horas + "h " + minutos + "m " + segundos + "s para o evento começar!";
}

setInterval(atualizarContador, 1000);