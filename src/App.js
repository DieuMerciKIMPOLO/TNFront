import logo from './logo.svg';
import './App.css';
import {SearchForm} from './SearchForm'
function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" width="30" height="24" className="d-inline-block align-text-top"/>
          </a>
        </div>
      </nav>
      <header className="App-header">
       <SearchForm/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Thierno Fall
        </a>
      </header>
    </div>
  );
}

export default App;
