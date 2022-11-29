import logo from './logo.svg';
import './App.css';
import {getPictureOfTheDay} from "./api";
import {useEffect} from "react";

function App() {
  // useState in order to save state in our app

  // useEffect is a hook
  // useEffect is function
  // useEffect takes two parameters - first is a function that will happen when the effect triggers
  // second param is the dependency array
  // dependency array tells the effect hook when to run
  useEffect(() => {
    // useEffect hooks cannot call out to async calls directly
    const getImage = async () => {
      const response = await getPictureOfTheDay();
      console.log("Parsed response body:", response);
    }

    getImage();
  }, []);

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
