import generateField from '../models/generateField.js';
import specs from '../models/specs.js';
import createShuffledMatrix from '../models/createShuffledMatrix';

const field = generateField(specs.width, specs.height, specs.topLeft, specs.topRight, specs.botLeft, specs.botRight);
const shuffledField = createShuffledMatrix(field);

export default shuffledField;