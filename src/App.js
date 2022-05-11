import logo from './logo.svg';
import './App.css';
import { useEffect } from "react";
const { MovieDb } = require("moviedb-promise");

function App() {
  const mdb = new MovieDb("4d51e2149ffec1e3fabb84a54d724b76");

  useEffect(() => {
    mdb
      .discoverMovie({
        page: 1,
        include_video: false,
        include_adult: false,
        sort_by: "popularity.desc",
        language: "en-US",
      })
      .then((response) => {
        console.log(response.results);
      })
      .catch((error) => {
        console.error(error);
      });
  });

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
