const pruneMatrix = (matrix, nodesToRemove) => {
  const prunedNodes = [];

  for (let i = nodesToRemove.length - 1; i >= 0; i--) {
    let node = matrix[nodesToRemove[i].y].splice(nodesToRemove[i].x, 1);
    prunedNodes.unshift(...node);
  }

  return prunedNodes;
};

const flattenMatrix = (matrix) => {
  return [].concat(...matrix);
};

const shuffleArr = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    let rndI = Math.floor(Math.random() * i);

    let tmp = arr[rndI];
    arr[rndI] = arr[i];
    arr[i] = tmp;
  }
}

const insertCoords = (arr, nodesToInsert, width) => {
  for (let i = 0; i < nodesToInsert.length; i++) {
    arr.splice(nodesToInsert[i].y * width + nodesToInsert[i].x, 0, nodesToInsert[i]);
  }
};

const arrToMatrix = (arr, width) => {
  const matrix = [];

  let i, k;
  for (i = 0, k = -1; i < arr.length; i++) {
    if (i % width === 0) {
      k++;
      matrix[k] = [];
    }
    matrix[k].push(arr[i]);
  }

  return matrix;
}

const shuffleMatrix = (matrix, lockedCoords) => {
  let width = matrix[0].length;
  let lockedNodes = pruneMatrix(matrix, lockedCoords);
  const arr = flattenMatrix(matrix);
  shuffleArr(arr);
  insertCoords(arr, lockedNodes, width);

  return arrToMatrix(arr, width);
};

const createShuffledMatrix = (matrix, lockedCoords) => {
  // construct a copy of matrix by values
  const newMatrix = matrix.map((arr) => {
    return arr.slice();
  });

  // shuffle the array
  const shuffledMatrix = shuffleMatrix(newMatrix, lockedCoords);

  // return shuffled matrix
  return shuffledMatrix;
};

export default createShuffledMatrix;