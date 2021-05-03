import './App.css';
import ColorNode from'./ColorNode.js';
import field from '../controllers/getField.js';
import specs from '../models/specs.js';

function App() {

  return (
    <div className="App">
      <p>Color Game!</p>
      <div className="field" style={{gridTemplate: 'repeat(' + specs.height + ', 1fr) / repeat(' + specs.width + ', 1fr)'}}>
        {field.map((row, i) => {
          return row.map((node, j) => {
            return <ColorNode node={node} key={'' + i + j} className='node'/>
          })
        })}
      </div>
    </div>
  );
}

export default App;
