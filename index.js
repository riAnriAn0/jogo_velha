// Funções // 

function atualizarMatriz(index, value) {
    let i = Math.floor(index / 3);
    let j = index % 3;
    matriz_tabulerio[i][j] = value;
}

function result(jogador){

    // VERIFICAÇÃO HORIZOLTAL
    for (let i = 0; i < 3; i++) {
        if ((matriz_tabulerio[i][0] === matriz_tabulerio[i][1]) && (matriz_tabulerio[i][0] === matriz_tabulerio[i][2]) && ((matriz_tabulerio[i][0] === "X") ||(matriz_tabulerio[i][0] === "O") )){
            vencedor.innerHTML = jogador;
            vencedo.classList.add("sumir")
            return;
        }
    }        

    // VERIFICAÇÃO VERTICAL
    for (let i = 0; i < 3; i++) {
        if ((matriz_tabulerio[0][i] === matriz_tabulerio[1][i]) && (matriz_tabulerio[0][i] === matriz_tabulerio[2][i]) && ((matriz_tabulerio[0][i] === "X") ||(matriz_tabulerio[0][i] === "O") )){
            vencedor.innerHTML = jogador;
            vencedo.classList.add("sumir")
            return;
        }
    }        

    // VERIFICAÇÃO DIAGONAIS
    if ((matriz_tabulerio[0][0] === matriz_tabulerio[1][1]) && (matriz_tabulerio[0][0] === matriz_tabulerio[2][2]) && ((matriz_tabulerio[0][0] === "X") ||(matriz_tabulerio[0][0] === "O") )){
        vencedor.innerHTML = jogador;
            vencedo.classList.add("sumir")
        return;

    }else if ((matriz_tabulerio[0][2] === matriz_tabulerio[1][1]) && (matriz_tabulerio[0][2] === matriz_tabulerio[2][0]) && ((matriz_tabulerio[0][2] === "X") ||(matriz_tabulerio[0][2] === "O") )){
        vencedor.innerHTML = jogador;
            vencedo.classList.add("sumir")
        return;
    }

} 

function change(cont){
    if( cont % 2 == 0 ){
        return "X";
    }else if(cont % 2 != 0) {
        return "O";
    }
}

let posicoes = document.querySelectorAll('.posicao');

let matriz_tabulerio = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

let cont = 1;
let span = document.getElementById("span")
let vencedor = document.getElementById("vencedor")
let vencedo = document.querySelector('.vencedo')


posicoes.forEach((element, index) => {
    element.addEventListener("click", (e) => {
        let btn_clicado = e.target;
       
        btn_clicado.value = change(cont);
        span.innerHTML = change(cont + 1)

        atualizarMatriz(index, btn_clicado.value);
        
        result(btn_clicado.value)
        cont++
    });
});



       
    

