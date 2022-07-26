
let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");



let resultado = document.getElementById("resultado");

//função para calcular as quantidades 

function calcular(){
    console.log("Calculando...");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne = Math.ceil(((carnePP(duracao) * adultos) + (carnePP(duracao)/ 2 * criancas))/1000);
    

    let qtdTotalCerveja = Math.ceil((cervejaPP(duracao) * adultos)/350);
    

    let qtdTotalRefri = Math.ceil(((refriPP(duracao) * adultos) + ((refriPP(duracao)/2) * criancas))/2000);
    

    let total = resultado.innerText= "Quantidade de carne: " + qtdTotalCarne + "Kg." + "\nQuantidade de latas de cerveja 350ml: " + qtdTotalCerveja + ". \nQuantidade de refrigerante de 2L: " + qtdTotalRefri + ".";

    return total;
}

function carnePP(duracao){
    if (duracao >= 6){
        return 650;
    } else{
        return 400;
    }
}

function cervejaPP(duracao){
    if (duracao >= 6){
        return 2000;
    } else{
        return 1200;
    }
}

function refriPP(duracao){
    if (duracao >= 6){
        return 1500;
    } else{
        return 1000;
    }
}