import generateField from '../models/colorAt.js';
import specs from '../models/specs.js';

const field = generateField(specs.width, specs.height, specs.topLeft, specs.topRight, specs.botLeft, specs.botRight);

export default field;