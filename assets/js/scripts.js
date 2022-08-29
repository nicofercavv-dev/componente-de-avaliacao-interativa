let nota;
let botao1 = document.querySelector(".um");
let botao2 = document.querySelector(".dois");
let botao3 = document.querySelector(".tres");
let botao4 = document.querySelector(".quatro");
let botao5 = document.querySelector(".cinco");

botao1.addEventListener("click", recebeNota);
botao2.addEventListener("click", recebeNota);
botao3.addEventListener("click", recebeNota);
botao4.addEventListener("click", recebeNota);
botao5.addEventListener("click", recebeNota);

function recebeNota() {
    nota = botao1.nodeValue;
}

console.log(nota);