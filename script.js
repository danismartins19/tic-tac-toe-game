var player = "O";
var options = [
    ['-','-','-'],
    ['-','-','-'],
    ['-','-','-']
];
var jogadas = 0;
var win = false;
var nextPlayer = document.getElementById('valuetime');
    nextPlayer.innerHTML = player;

var buttonNewGame = document.getElementById('newgame');

//novo jogo
buttonNewGame.addEventListener("click", ()=>{
    options = [
        ['-','-','-'],
        ['-','-','-'],
        ['-','-','-']
    ];

    player ="O";
    jogadas = 0;
    win = false;
    nextPlayer.innerHTML = player;

    for (let i of blocks){
        i.innerHTML = "";
    }
})

var blocks = document.querySelectorAll('.block');

for (let i of blocks){

    i.addEventListener("click", () => {
        if(!win){
            guardaJogada(i.id , player);
        }
    });
}

const guardaJogada = (idBlock ,  player) =>{



    var block = document.getElementById(idBlock);

    if ( idBlock === "b1"){
        if (options[0][0] === "-"){
            options[0][0] = player;
            block.innerHTML = player;
            trocarPlayer();
        }
    }//

    if ( idBlock === "b2"){
        if (options[0][1] === "-"){
            options[0][1] = player;
            block.innerHTML = player;
            trocarPlayer();
        }
    }//

    if ( idBlock === "b3"){
        if (options[0][2] === "-"){
            options[0][2] = player;
            block.innerHTML = player;
            trocarPlayer();
        }
    }//

    if ( idBlock === "b4"){
        if (options[1][0] === "-"){
            options[1][0] = player;
            block.innerHTML = player;
            trocarPlayer();
        }
    }//

    if ( idBlock === "b5"){
        if (options[1][1] === "-"){
            options[1][1] = player;
            block.innerHTML = player;
            trocarPlayer();
        }
    }//

    if ( idBlock === "b6"){
        if (options[1][2] === "-"){
            options[1][2] = player;
            block.innerHTML = player;
            trocarPlayer();
        }
    }//

    if ( idBlock === "b7"){
        if (options[2][0] === "-"){
            options[2][0] = player;
            block.innerHTML = player;
            trocarPlayer();
        }
    }//

    if ( idBlock === "b8"){
        if (options[2][1] === "-"){
            options[2][1] = player;
            block.innerHTML = player;
            trocarPlayer();
        }
    }//

    if ( idBlock === "b9"){
        if (options[2][2] === "-"){
            options[2][2] = player;
            block.innerHTML = player;
            trocarPlayer();
        }
    }//



}

const trocarPlayer = () =>{
    jogadas ++;
    verificaGanhador();
    console.log(jogadas)

    if(player==="O"){
        player = "X";
        nextPlayer.innerHTML = player;
    } else {
        player = "O";
        nextPlayer.innerHTML = player;
    }
}


const verificaGanhador = () =>{
    if (
            (options[0][0] === "O" && options[0][1] === "O" && options[0][2] === "O")
            ||
            (options[1][0] === "O" && options[1][1] === "O" && options[1][2] === "O")
            ||
            (options[2][0] === "O" && options[2][1] === "O" && options[2][2] === "O")
            ||
            (options[0][0] === "O" && options[1][0] === "O" && options[2][0] === "O")
            ||
            (options[0][1] === "O" && options[1][1] === "O" && options[2][1] === "O")
            ||
            (options[0][2] === "O" && options[1][2] === "O" && options[2][2] === "O")
            ||
            (options[0][0] === "O" && options[1][1] === "O" && options[2][2] === "O")
            ||
            (options[2][0] === "O" && options[1][1] === "O" && options[0][2] === "O")
        )
    {
        console.log("o venceu");
        win = true;
    } else if (
            (options[0][0] === "X" && options[0][1] === "X" && options[0][2] === "X")
            ||
            (options[1][0] === "X" && options[1][1] === "X" && options[1][2] === "X")
            ||
            (options[2][0] === "X" && options[2][1] === "X" && options[2][2] === "X")
            ||
            (options[0][0] === "X" && options[1][0] === "X" && options[2][0] === "X")
            ||
            (options[0][1] === "X" && options[1][1] === "X" && options[2][1] === "X")
            ||
            (options[0][2] === "X" && options[1][2] === "X" && options[2][2] === "X")
            ||
            (options[0][0] === "X" && options[1][1] === "X" && options[2][2] === "X")
            ||
            (options[2][0] === "X" && options[1][1] === "X" && options[0][2] === "X")
    )
    {
        console.log("x venceu");
        win = true;
    } else if (jogadas == 9){
        console.log("Empatou");
    }
}




