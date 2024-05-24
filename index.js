// Funções // 

// Reiniciar // 

function resetar(time){
    setTimeout(() =>{
        for (let i = 0; i < 9; i++) {
            posicoes[i].value = ""
        }
        
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                matriz_tabulerio[i][j] = ""
            }
        }
    },time)

    cont = 0
}

// Atualizar matriz
function atualizarMatriz(index, value) {
    let i = Math.floor(index / 3);
    let j = index % 3;
    matriz_tabulerio[i][j] = value;
}

function result(jogador){

    // VERIFICAÇÃO HORIZOLTAL
    for (let i = 0; i < 3; i++) {
        if ((matriz_tabulerio[i][0] === matriz_tabulerio[i][1]) && (matriz_tabulerio[i][0] === matriz_tabulerio[i][2]) && ((matriz_tabulerio[i][0] === "X") ||(matriz_tabulerio[i][0] === "O") )){ 
            placar(jogador)
            return;
        }
    }        

    // VERIFICAÇÃO VERTICAL
    for (let i = 0; i < 3; i++) {
        if ((matriz_tabulerio[0][i] === matriz_tabulerio[1][i]) && (matriz_tabulerio[0][i] === matriz_tabulerio[2][i]) && ((matriz_tabulerio[0][i] === "X") ||(matriz_tabulerio[0][i] === "O") )){
            placar(jogador)
            return;
        }
    }        

    // VERIFICAÇÃO DIAGONAIS
    if ((matriz_tabulerio[0][0] === matriz_tabulerio[1][1]) && (matriz_tabulerio[0][0] === matriz_tabulerio[2][2]) && ((matriz_tabulerio[0][0] === "X") ||(matriz_tabulerio[0][0] === "O") )){        
        placar(jogador)
        return;

    }else if ((matriz_tabulerio[0][2] === matriz_tabulerio[1][1]) && (matriz_tabulerio[0][2] === matriz_tabulerio[2][0]) && ((matriz_tabulerio[0][2] === "X") ||(matriz_tabulerio[0][2] === "O") )){ 
        placar(jogador)
        return;
    }
} 

// Alteração de jogador

function change(cont){
    if( cont % 2 == 0 ){
        return "X";
    }else if(cont % 2 != 0) {
        return "O";
    }
}

// Mudança do placar

let pontos_x = document.querySelector('.jogador_x');
let pontos_o = document.querySelector('.jogador_o');

function placar(jogador_v){
    if (jogador_v == "X") {
        ponto_x += 1
        pontos_x.value = ponto_x
        resetar(1000)
    } 
    
    if (jogador_v == "O") {    
        ponto_o += 1
        pontos_o.value = ponto_o
        resetar(1000)
    }
    // notificação do vencedor
    vencedor.innerHTML = jogador_v;
    vencedo.classList.add("aparecer")
    setTimeout(()=>{
        vencedo.classList.remove("aparecer")
    },2000)
}



let posicoes = document.querySelectorAll('.posicao');

let matriz_tabulerio = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

let ponto_o = 0
let ponto_x = 0
let cont = 1;
let span = document.getElementById("span")
let vencedor = document.getElementById("vencedor")
let vencedo = document.querySelector('.vencedo')


posicoes.forEach((element, index) => {
    element.addEventListener("click", (e) => {
        let btn_clicado = e.target;
       
        if( btn_clicado.value == ""){
            btn_clicado.value = change(cont);
            span.innerHTML = change(cont + 1);

            atualizarMatriz(index, btn_clicado.value);
            
            result(btn_clicado.value);

            cont++;       
        };

        if( cont == 10){
            resetar(500)
            vencedor.innerHTML = "EMPATE"
            vencedo.classList.add("aparecer")
            setTimeout(()=>{
                vencedo.classList.remove("aparecer")
            },2000)
        }
    });
});
