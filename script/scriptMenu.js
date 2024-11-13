const rotasOpcoes = {
    calculadora: "calcSimples.html",
    conversor : "conversorMedidas.html"
}

const verificarOp = () =>{
    const opSelect = document.querySelector('.selectOpcoes').value;

    if(rotasOpcoes[opSelect]) {
        window.location.href = rotasOpcoes[opSelect];
    }
}



const botaoAvancar = document.querySelector('.botaoIr');
botaoAvancar.addEventListener("click", verificarOp);


