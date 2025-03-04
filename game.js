let board = ["", "", "", "", "", "", "", "", ""];
let playerTime = 0;
let symbols = ["x", "o"];
let gameOver = false;

/*A function receberá o id do elemento, que vai verificar se a posição do array board
é igual a vazio e depois vai atribuir a posição do board através do array symbols que terá sua 
posição pelo playertime, então inicialmente é 0 então a posição 0 do array symbols é a string 'x'
então board receberá na posição 0 o valor x, em seguida será verificado se playertime é 
igual a 0 e se for ele será sobreescrevido para um e senão será sobreescrevido para 0 assim
será passada a vez para o próximo jogador.
*/
function handleMove(position) {
  //
  if (gameOver) {
    return;
  }
  if (board[position] == "") {
    board[position] = symbols[playerTime];

    gameOver = isWin();
    if (gameOver == false) {
      if (playerTime == 0) {
        playerTime = 1;
      } else {
        playerTime = 0;
      }
    }
  }
  return gameOver;
}

function isWin() {
  let winState = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winState.length; i++) {
    let seq = winState[i];

    let pos1 = seq[0];
    let pos2 = seq[1];
    let pos3 = seq[2];

    if (
      board[pos1] == board[pos2] &&
      board[pos1] == board[pos3] &&
      board[pos1] != ""
    ) {
      return true;
    }
  }
  return false;
}
