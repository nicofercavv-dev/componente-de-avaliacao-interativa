let nota;
let botao1 = document.querySelector(".um").onclick = function() { recebeNota(this); };
let botao2 = document.querySelector(".dois").onclick = function() { recebeNota(this); };
let botao3 = document.querySelector(".tres").onclick = function() { recebeNota(this); };
let botao4 = document.querySelector(".quatro").onclick = function() { recebeNota(this); };
let botao5 = document.querySelector(".cinco").onclick = function() { recebeNota(this); };

function recebeNota(botao) {
    nota = botao.value;
    console.log(nota);
}

let buttonSubmit = document.querySelector(".submit").onclick = function() {  };

function confirmaNota() {
    let body = document.getElementsByTagName("body");
    let imagemThanks = document.createElement("img");
    imagemThanks.setAttribute('src="assets/images/illustration-thank-you.svg"');
    imagemThanks.setAttribute('alt="Thank You Illustration"');
    imagemThanks.classList.add("submit");
    body.appendChild(imagemThanks);
    setInterval(3000);
    document.location.reload(true);
}