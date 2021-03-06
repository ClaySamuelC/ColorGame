const colorBetween = (colorA, colorB, ratio) => {
  const finalColor = {};

  finalColor.red = Math.round(colorA.red + (colorB.red - colorA.red) * ratio);
  finalColor.green = Math.round(colorA.green + (colorB.green - colorA.green) * ratio);
  finalColor.blue = Math.round(colorA.blue + (colorB.blue - colorA.blue) * ratio);

  return finalColor;
};

const colorAt = (x, y, width, height, colorTopLeft, colorTopRight, colorBotLeft, colorBotRight) => {
  const xRatio = x / (width - 1);
  const yRatio = y / (height - 1);

  const topColor = colorBetween(colorTopLeft, colorTopRight, xRatio);
  const botColor = colorBetween(colorBotLeft, colorBotRight, xRatio);
  const finalColor = colorBetween(topColor, botColor, yRatio);

  return finalColor;
};

const generateField = (width, height, colorTopLeft, colorTopRight, colorBotLeft, colorBotRight, lockedCoords) => {
  const field = [];

  for (let i = 0; i < height; i++) {
    field.push([]);
    for (let j = 0; j < width; j++) {
      field[i].push({
        color: colorAt(j, i, width, height, colorTopLeft, colorTopRight, colorBotLeft, colorBotRight),
        x: j,
        y: i,
        locked: false
      });
    }
  }

  // lock the appropriate nodes
  for (let i = 0; i < lockedCoords.length; i++) {
    field[lockedCoords[i].y][lockedCoords[i].x].locked = true;
  }

  return field;
};

export default generateField;