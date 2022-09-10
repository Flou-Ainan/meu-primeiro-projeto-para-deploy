import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <h2>Seja bem vindo ao meu primeiro deploy ! 😎️</h2>
        <iframe title="telegram" src="https://telesco.pe/embed/dapedraaodigital/46" width="420" height="340" frameborder="0"></iframe>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Made by <code>Flou Ainan</code>
        </p>
        <a
          className="App-link"
          href="https://github.com/Flou-Ainan/meu-primeiro-projeto-para-deploy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source Code
        </a>
      </header>
    </div>
  );
}

export default App;
