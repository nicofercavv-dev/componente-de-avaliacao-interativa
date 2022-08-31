let nota;
let botao1 = document.querySelector(".um");
let botao2 = document.querySelector(".dois");
let botao3 = document.querySelector(".tres");
let botao4 = document.querySelector(".quatro");
let botao5 = document.querySelector(".cinco");

console.log(botao1);

botao1.addEventListener("click", recebeNota(this));
botao2.addEventListener("click", recebeNota(this));
botao3.addEventListener("click", recebeNota(this));
botao4.addEventListener("click", recebeNota(this));
botao5.addEventListener("click", recebeNota(this));

function recebeNota(botao) {
    nota = botao.value;
}

console.log(nota);