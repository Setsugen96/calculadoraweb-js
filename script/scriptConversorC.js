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
    "quilometro-metro": (valor) => valor * 1000,
    "quilometro-centimetro": (valor) => valor * 100000,
    "quilometro-milimetro": (valor) => valor * 1000000,
    "metro-quilometro": (valor) => valor / 1000,
    "metro-centimetro": (valor) => valor * 100,
    "metro-milimetro": (valor) => valor * 1000,
    "centimetro-quilometro": (valor) => valor / 100000,
    "centimetro-metro": (valor) => valor / 100,
    "centimetro-milimetro": (valor) => valor * 10,
    "milimetro-quilometro": (valor) => valor / 1000000,
    "milimetro-metro": (valor) => valor / 1000,
    "milimetro-centimetro": (valor) => valor / 10,
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

