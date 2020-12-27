import logo from './assets/images/logo.svg';
import './assets/css/App.css';

//importacion de "MiComponente"
import MiComponente from "./components/MiComponente";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola mundo desde React
        </p>
        <section className="componenetes">
          <MiComponente />
        </section>
      </header>
    </div>
  );
}

export default App;
