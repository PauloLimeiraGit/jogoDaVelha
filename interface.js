/*primeiro precisamos pegar todos os espaços que vão ficar com os simbolos e adicionanar um
evento de click, e para isso precisamos que o documento seja executado antes dos codigo js,
para isso adicioanos um evento no DOMContentLoaded, que fará a leitura do documento
em seguida criamos um function onde atribuimos a uma variavel "squares" através do querySelectorAll
assim a variavel receberá uma coleção dos elementos com o mesmo seletor, em seguida precisamos percorrer
esse array de seletores através do forEach onde cada elemento receberá um evento de click e executar 
uma função.
*/

document.addEventListener("DOMContentLoaded", () => {
  //
  let squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("click", handleClick);
  });
});

/* A function handleClick tem o objetivo de atribuir o elemento que teve o evento executado
 a variável 'square' e a variável position recebe o id do elemento, em seguida será executada
 a função 'handleMove que está no arquivo game.js e receberá o id do elemento como parâmetro 
 'position'
*/

function handleClick(event) {
  let square = event.target;
  let position = square.id;

  if (handleMove(position)) {
    setTimeout(() => {
      alert("O jogo acabou, o vencedor foi - " + playerTime);
    }, 10);
  }
  updateSquares();
}

/* nessa function updatesquares vamos atualizar os quadrados com seus symbolos,
 será atribuída a coleção através do seletor em seguida um foreach onde será passado o elemento
 e a posição do board, se estiver com valor será adicionado o simbolo.
*/

function updateSquares() {
  let square = document.querySelectorAll(".square");

  square.forEach((square) => {
    let position = square.id;
    let symbol = board[position];

    if (symbol != "") {
      square.innerHTML = `<div class='${symbol}'></div>`;
    }
  });
}
