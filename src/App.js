import './App.css';
import Fetch from './components/Fetch';
import SpriteFetch from './components/SpriteFetch'
import Generations from './components/Generations';
function App() {
  return (
    <div className="App">
      <header>
        <div className="Database">Pokemon Database</div>
        <li className="Header">All Pokemon</li>
        <li className="Header">Gen 1 </li>
        <li className="Header">Gen 2</li>
        <li className="Header">Gen 3</li>
        <li className="Header">Gen 4</li>
        <li className="Header">Gen 5</li>
        <li className="Header">Gen 6</li>
        <li className="Header">Gen 7</li>
        <li className="Header">Gen 8</li>
      </header>
      <Fetch />
      {/* <SpriteFetch /> */}
    </div>
  );
}

export default App;
