const width = 5;
const height = 6;

const board = [];

for (let i = 0; i < height; i++) {
  board.push([]);
  for (let j = 0; j < width; j++) {
    board[i].push('' + i + j);
  }
}

const displayBoard = () => {
  for (let i = 0; i < board.length; i++) {
    let displayLine = '';
    for (let j = 0; j < board[i].length; j++) {
      displayLine += ('#' + board[i][j] + ' ');
    }
    console.log(displayLine);
  }
};

displayBoard();