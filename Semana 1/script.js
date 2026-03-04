function increment(id){
    let elemento=document.getElementById(id);
    let qt=parseInt(elemento.innerText);
    elemento.innerText=qt+1;
    calculateTotal('qt1', 'qt2', 'qt3', 'total');
    const sucessoCompra=document.getElementById("text1");
    sucessoCompra.innerText ="";

}

function decrement(id){
    let elemento=document.getElementById(id);
    let qt=parseInt(elemento.innerText);
    if(qt>0){
        elemento.innerText=qt-1;
        calculateTotal('qt1', 'qt2', 'qt3', 'total');
        const sucessoCompra=document.getElementById("text1");
        sucessoCompra.innerText ="";
    }
}

function calculateTotal(id1, id2, id3, idTotal){
    let elemento1=document.getElementById(id1);
    let qt1=parseInt(elemento1.innerText);
    let elemento2=document.getElementById(id2);
    let qt2=parseInt(elemento2.innerText);
    let elemento3=document.getElementById(id3);
    let qt3=parseInt(elemento3.innerText);

    let elemento4=document.getElementById(idTotal);

    let result= qt1*40 + qt2*80 + qt3*100;
    elemento4.innerText=result + "€";


}

function sucessoCompra(){

    const elemento=document.getElementById("text1");
    let elemento1=document.getElementById("qt1");
    let elemento2=document.getElementById("qt2");
    let elemento3=document.getElementById("qt3");
    let elemento4=document.getElementById("total");
    let qt1=parseInt(elemento1.innerText);
    let qt2=parseInt(elemento2.innerText);
    let qt3=parseInt(elemento3.innerText);
    if(qt1>0 || qt2>0 || qt3>0){
        elemento1.innerText=0;
        elemento2.innerText=0;
        elemento3.innerText=0;
        elemento4.innerText=0;
        elemento.innerText ="Compra realizada com sucesso!";
    }

}

function verificarPalavroes(){

    let palavroes=["alcoviteiro",
        "biltre",
        "beócio",
        "calhorda",
        "energúmeno",
        "janota",
        "mentecapto",
        "mequetrefe",
        "mocorongo",
        "paspalho",
        "palerma",
        "patife",
        "pulha",
        "purgante",
        "sacripanta"];

    let input = document.getElementById("comentario");
    let mensagemErro = document.getElementById("mensagemErro");
    let botao = document.getElementById("btnsubmit");

    let texto = input.value.toLowerCase();
    let temPalavrao = false;

    for (let i=0; i<palavroes.length; i++) {
        if (texto.includes(palavroes[i])) {
            temPalavrao = true;
            break;
        }
    }

    if (temPalavrao) {
        mensagemErro.innerText = "Palavras ofensivas detetadas. Modere a linguagem.";
        botao.disabled = true;
    } else {
        mensagemErro.innerText = "";
        botao.disabled = false;
    }


}

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