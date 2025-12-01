let listaSorteados = [];
let numeroMaximo = 10;
let numeroSecreto = gerarNumero();
let tentativas = 1;

function exibirTextoTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate: 1.2})
}

function exibirTelaInicio(){
    exibirTextoTela("h1", "Descubra o número secreto");
    exibirTextoTela("p", `Escolha um número de 1 a ${numeroMaximo}`);
}

exibirTelaInicio()

function verificarChute(){
    let chute = document.querySelector("input").value;
    console.log(chute == numeroSecreto);
    if(chute == numeroSecreto){
        exibirTextoTela("h1", "Parabéns, Você Acertou!");
        let palavraTentativa = tentativas ==     1 ? "tentativa" : "tentativas";
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoTela("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");

        }else if(chute > numeroSecreto){
            exibirTextoTela("h1", "Você errou!")
            exibirTextoTela("p", `O número secreto é menor que ${chute}`);
            }else{
                exibirTextoTela("h1", "Você errou!")
                exibirTextoTela("p", `O número secreto é maior que ${chute}`)
                }
    tentativas++;
    limparCampo()
}

function gerarNumero() {
   let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);
   let quantidadeDeElementosNaLista = listaSorteados.length;
    
    if(quantidadeDeElementosNaLista == numeroMaximo){
        listaSorteados = [];
    }
    if(listaSorteados.includes(numeroEscolhido)){
        return gerarNumero();
    }else{
        listaSorteados.push(numeroEscolhido);
        console.log(listaSorteados)
        return numeroEscolhido;
    }

}
function limparCampo(){
    let chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo(){
    tentativas = 1;
    numeroSecreto = gerarNumero()
    limparCampo()
    exibirTelaInicio()
    document.getElementById("reiniciar").setAttribute("disabled", true)
}