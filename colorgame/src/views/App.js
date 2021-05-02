import './App.css';
import ColorNode from'./ColorNode.js';
import field from '../controllers/getField.js';

function App() {

  return (
    <div className="App">
      <p>Color Game!</p>
      <div className="field">
        {field.map((row, i) => {
          return row.map((color, j) => {
            return <ColorNode color={color} key={'' + i + j} className='node'/>
          })
        })}
      </div>
    </div>
  );
}

export default App;
