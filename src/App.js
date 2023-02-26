import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Cover from './components/cover';
import React from 'react';
import Images from './components/images';

function App() {

  const [darkMode, setDarkMode] = React.useState(false);
  const [query, setQuery] = React.useState("");

  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode)
  }

  return (
    <div className={darkMode ? "App-dark" : "App"}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} query={query} setQuery={setQuery}/>
      <Cover />
      <div className='container'>
        <Images query={query} darkMode={darkMode} />
      </div>
    </div>
  );
}

export default App;
