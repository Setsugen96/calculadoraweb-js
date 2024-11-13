const valor1 = document.querySelector("#valor1");
const valor2 = document.querySelector("#valor2");
const resultado = document.querySelector("#resultado");
const mensagemErro = document.querySelector("#mensagem-erro");
const operacoesSelect = document.querySelector('.operacoes');
const botaoVoltar = document.querySelector(".botaoVoltar");
const botaoLimpar = document.querySelector(".botaoLimpar");


botaoLimpar.addEventListener('click', () => {
    valor1.value = '';
    valor2.value = '';
    resultado.innerHTML = '';
    mensagemErro.innerHTML = '';
})

botaoVoltar.addEventListener('click', () => {
    window.location.href = "index.html";
})



const calcular = () => {

    if (valor1.value === '' || valor2.value === '') {
        resultado.innerHTML = '';
        mensagemErro.innerHTML = '';

    }else if(isNaN(valor1.value) || isNaN(valor2.value)){
        resultado.innerHTML = '';
        mensagemErro.innerHTML = 'Ops, você precisa escrever números!';
        mensagemErro.classList.add("erro");

        setTimeout(()=>{
            mensagemErro.innerHTML = "";
            mensagemErro.classList.remove("erro");
        }, 3000)

    } else {

        const num1 = parseFloat(valor1.value);
        const num2= parseFloat(valor2.value);
        const operacaoSelecionada = operacoesSelect.value;
        let resultadoFinal;

        switch(operacaoSelecionada) {

            case '+':
                resultadoFinal = num1 + num2;  
                break;

            case '-':
                
                resultadoFinal = num1 - num2;
                break;

            case '*':
                resultadoFinal = num1 * num2;
                break; 

            case '÷':

                if (num2 === 0) {
                    valor1.value = '';
                    valor2.value = '';
                    
                    mensagemErro.innerHTML = 'Divisão por zero não é permitida.'
                    mensagemErro.classList.add("erro");
                   

                    setTimeout(()=>{
                        mensagemErro.innerHTML = "";
                    }, 3000)

                } else {
                    
                    resultadoFinal = num1 / num2;
                    
                    
                }
                break;
        }

        if (resultadoFinal !== undefined) {
            resultado.innerHTML = resultadoFinal;
        } else {
            resultado.innerHTML = "";
        }
       

    } 
    
    valor1.addEventListener("input", calcular);
    valor2.addEventListener("input", calcular);
    operacoesSelect.addEventListener("change", calcular);

}

botaoLimpar.addEventListener('click', () => {
    valor1.value = '';
    valor2.value = '';
    resultado.innerHTML = '';
    mensagemErro.innerHTML = '';
})

botaoVoltar.addEventListener('click', () => {
    window.location.href = "index.html";
})


calcular();



