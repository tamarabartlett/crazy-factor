import logo from './logo.svg';
import './App.css';
import Input from './components/Input/Input';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Woo hoooo!
        </p>
      </header>
      <body>
        <Input/>
      </body>
    </div>
  );
}

export default App;
