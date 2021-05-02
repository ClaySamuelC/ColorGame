const swap = (aX, aY, bX, bY, matrix) => {
  let temp = matrix[aY][aX];
  matrix[aY][aX] = matrix[bY][bX];
  matrix[bY][bX] = temp;
};

const shuffleMatrix = (matrix) => {
  for (let i = matrix.length - 1; i >= 0; i--) {
    for (let j = matrix[0].length - 1; j >= 0; j--) {
      let randomIndex = Math.floor(Math.random() * (i * matrix.length + j));
      let randomI = Math.floor(randomIndex / matrix.length);
      let randomJ = randomIndex % matrix[0].length;

      swap(randomJ, randomI, j, i, matrix);
    }
  }
};

const createShuffledMatrix = (matrix) => {
  // construct a copy of matrix by values
  const newMatrix = matrix.map((arr) => {
    return arr.slice();
  });

  // shuffle the array
  shuffleMatrix(newMatrix);

  // return shuffled matrix
  return newMatrix;
};

export default createShuffledMatrix;