import React from 'react';
import './App.css';
import GetMovies from './Components/GetMovies';
import Navbar from './Components/Navbar'

function App() {
  return (
      <div className="App">
        <Navbar/>
        <GetMovies/>

      </div>
 
  );
}

export default App;
