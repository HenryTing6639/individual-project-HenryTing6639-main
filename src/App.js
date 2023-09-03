import logo from './logo.svg';
import './App.css';
import HenzaClothes from './Henza.Clothes';


const App = (propos) => {
  
  const {HenzaClothes} = propos

  return (
    <div>
      <h1>HenzaClothes</h1>
      <ul>
      <li>{HenzaClothes[1].content}</li>
      <li>{HenzaClothes[2].content}</li>
     

      </ul>
    </div>
  )

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
