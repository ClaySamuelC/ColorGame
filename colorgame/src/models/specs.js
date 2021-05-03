const specs = {
  width: 5,
  height: 7,
  topLeft: {
    red:   134,
    green: 166,
    blue:  161
  },
  topRight: {
    red:   245,
    green: 242,
    blue:  187
  },
  botLeft: {
    red:   47,
    green: 113,
    blue:  171
  },
  botRight: {
    red:   237,
    green: 107,
    blue:  91
  },
  lockedCoords: [
    {x: 0, y: 0},
    {x: 4, y: 0},
    {x: 0, y: 6},
    {x: 4, y: 6}
  ]
};
// locked coords should be in order of where they appear in the matrix when read in reading order.

export default specs;