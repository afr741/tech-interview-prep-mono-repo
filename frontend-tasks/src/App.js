import logo from "./logo.svg";
import "./App.css";
import ProgressBar from "./components/ProgressBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <ProgressBar />
    </div>
  );
}

export default App;
