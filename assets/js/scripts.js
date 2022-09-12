let nota;
let botao1 = document.querySelector(".um").onclick = function() { recebeNota(this); };
let botao2 = document.querySelector(".dois").onclick = function() { recebeNota(this); };
let botao3 = document.querySelector(".tres").onclick = function() { recebeNota(this); };
let botao4 = document.querySelector(".quatro").onclick = function() { recebeNota(this); };
let botao5 = document.querySelector(".cinco").onclick = function() { recebeNota(this); };
let main = document.querySelector("main");

function recebeNota(botao) {
    nota = botao.value;
    console.log(nota);
}

let buttonSubmit = document.querySelector(".submit").onclick = function() { confirmaNota(); };

function confirmaNota() {

    if(!nota) {
        let aviso = document.querySelector(".mensagem");
        console.log(aviso);
        const TEMPINHO = setTimeout(() => {
            aviso.classList.toggle("mensagem-a-mostra");
            aviso.classList.toggle("mensagem-animar");
        }, 5000);
        aviso.classList.toggle("mensagem-a-mostra");
        aviso.classList.toggle("mensagem-animar");
    }
    else {
        let imagem = document.createElement("img");
        let span = document.createElement("span");
        let div = document.createElement("div");

        while (main.firstChild) {
            main.removeChild(main.firstChild);
        }

        main.classList.add("after-submit");

        imagem.setAttribute("src", "assets/images/illustration-thank-you.svg");
        imagem.setAttribute("alt", "Smartphone Illustration");
        span.innerText = `You selected ${nota} out of 5`;
        div.innerHTML = "<h1>Thank you!</h1>\n<p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch! </p>";

        main.appendChild(imagem);
        main.appendChild(span);
        main.appendChild(div);

        main.classList.toggle("animar");

        const INTERVALO_PARA_RECARREGAR_PAGINA = setTimeout(() => {
            document.location.reload(true);
        }, 5000);
    }
}