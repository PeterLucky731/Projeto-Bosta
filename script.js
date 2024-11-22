const btn = document.querySelector('.btn');
const form = document.getElementById('controle');

form.addEventListener('change', pegouMudanca);

const funcoes = {
    text(valor){
        btn.innerText = valor;
    },

    color(valor){
        btn.style.color = valor;
    },
    
    backgroundColor(valor){
        btn.style.backgroundColor = valor;
    },

    width(valor){
        btn.style.width = valor + 'px';
    },

    heigh(valor){
        btn.style.height = valor + 'px';
    },

    border(valor){
        btn.style.border = valor;
    },

    borderRadius(valor){
        btn.style.borderRadius = valor + 'px';
    },

    fontFamily(valor){
        btn.style.fontFamily = valor;
    },

    fontSize(valor){
        btn.style.fontSize = valor + 'px';
    }
}

function pegouMudanca(event){
    const valor = event.target.value;
    const nome = event.target.name;
    console.log(nome)
    funcoes[nome](valor);
    colocarStorage(nome, valor);
}

function colocarStorage(nome, valor){
    localStorage[nome] = valor;
}

colocarCss();

function colocarCss(){
    const variaveisLocal = Object.keys(localStorage);

    variaveisLocal.forEach(function(variavelAtual){
        funcoes[variavelAtual](localStorage[variavelAtual])
    })
};