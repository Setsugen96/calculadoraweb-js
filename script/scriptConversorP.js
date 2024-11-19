const valor1 = document.querySelector("#valor");
const resultado = document.querySelector("#resultado");
const medidaOrigem = document.querySelector(".medidasOrigem");
const medidaDestino = document.querySelector(".medidasDestino");
const botaoVoltar = document.querySelector(".botaoVoltar");
const botaoLimpar = document.querySelector(".botaoLimpar");
const chave = `${medidaOrigem}-${medidaDestino}`;

botaoVoltar.addEventListener('click', () => {
    window.location.href = "index.html";
})


botaoLimpar.addEventListener('click', () => {
    valor1.value = '';
    resultado.textContent = '';
});


const operacoes = {
    "tonelada-quilograma": (valor) => valor * 1000,
    "tonelada-grama": (valor) => valor * 1000000,
    "quilograma-tonelada": (valor) => valor / 1000,
    "quilograma-grama": (valor) => valor * 1000,
    "grama-tonelada": (valor) => valor / 1000000,
    "grama-quilograma": (valor) => valor / 1000,
};



const converter = () => {
    
    const valor = parseFloat(valor1.value);
    const medidaOrigemValue = medidaOrigem.value;
    const medidaDestinoValue = medidaDestino.value;
    const chave = `${medidaOrigemValue}-${medidaDestinoValue}`;

    if(isNaN(valor)){
        resultado.textContent = '';

    }else{
        
        if(operacoes[chave]) {
            const convresultado = operacoes[chave](valor);
            resultado.textContent = `${convresultado}`;
        }
    }   
}



valor1.addEventListener("input", converter);
medidaOrigem.addEventListener("change", converter);
medidaDestino.addEventListener("change", converter);