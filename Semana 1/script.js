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
    let qt1=parseInt(elemento1.innerText);
    let qt2=parseInt(elemento2.innerText);
    let qt3=parseInt(elemento3.innerText);
    if(qt1>0 || qt2>0 || qt3>0){
        elemento1.innerText=0;
        elemento2.innerText=0;
        elemento3.innerText=0;
        elemento.innerText ="Compra realizada com sucesso!";
    }

}