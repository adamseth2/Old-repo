const player1 = {
    name: 'Player 1',
    icon: 'O',
    iconColor: 'red',
    score: 0
}

const player2 = {
    name: 'Player 2',
    icon: 'X',
    iconColor: 'blue',
    score: 0
}
let player1Turn = true;
const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const cells = document.querySelectorAll('.cell');
let tttBoard;
function startGame() {
    let playerName;
    if (player1Turn) playerName =player1.name;
    else playerName =player2.name; 
    document.querySelector("#end-game").innerText =playerName +" Turn"
    tttBoard = new Array(9).fill('');
    for (let i = 0; i <cells.length; i++) {
        cells[i].innerText ='';
        cells[i].style.removeProperty('background-color');
        cells[i].addEventListener('click', squaretoId, false);
    }
}

startGame();
function squaretoId(square) {
    clickBoard(square.target.id);
}
function clickBoard(squareId) {
    let currentPlayer;
    if (player1Turn) currentPlayer = player1;
    else currentPlayer= player2;
    let clickedCell =document.getElementById(squareId);
    if (clickedCell.innerText !== 'O' && clickedCell.innerText !== "X") {
        document.querySelector("#end-game").style.display ="none";
        clickedCell.innerText = currentPlayer.icon;
        tttBoard[squareId] = currentPlayer.icon;
        
        clickedCell.style.cursor ="default";
        clickedCell.style.color = currentPlayer.iconColor;
        
        player1Turn =!player1Turn;
        if (checkWin(player1)) {
            document.getElementById('player1Score').innerText = ++player1.score;
            let endGame = document.querySelector("#end-game"); 
            endGame.style.display ="grid";
            endGame.innerText = "Player 1 has Won!";
            
        }
        else if (checkWin(player2)) {
            document.getElementById('player2Score').innerText = ++player2.score;
            let endGame = document.querySelector("#end-game"); 
            endGame.style.display ="grid";
            endGame.innerText = "Player 2 has Won!";
        }
    }
        
}
function checkWin(player) {
    for (let i = 0; i < winCombos.length; i++) {
        let win = 0;
        for (let k =0; k <winCombos[i].length; k++) {
            if (tttBoard[winCombos[i][k]] === player.icon) win++;
            if (win === 3) {
                for(let l = 0; l < 3; l++) {
                    cells[[winCombos[i][l]]].style.backgroundColor = 'rgba(0, 255, 0, 0.15)';
                    
                }
                return true;
            }
        }
    }
    return false;
}