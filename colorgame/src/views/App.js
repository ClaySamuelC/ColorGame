import './App.css';
import ColorNode from'./ColorNode.js';
import specs from '../tests/specs.js';

function App() {
  const field = [];

  for (let i = 0; i < specs.height; i++) {
    field.push([]);
    for (let j = 0; j < specs.width; j++) {
      field[i].push(i * specs.width + j);
    }
  }

  return (
    <div className="App">
      <p>Color Game!</p>
      <div className="field">
        {field.map((row, i) => {
          return row.map((num, j) => {
            return <ColorNode row={i} col={j} className='node'/>
          })
        })}
      </div>
    </div>
  );
}

export default App;
