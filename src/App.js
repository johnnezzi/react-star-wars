import React , { useState , useEffect } from 'react';
import axios from "axios"
import './App.css';

function App() {
  const [ character, setCharacters ] = useState([]);

  useEffect(getPeople,[]);

  function getPeople(event) {
    if (event) event.preventDefault();
    axios.get("https://swapi.co/api/people/")
        .then(res => {
          console.log(res.data.results);
          setCharacters(res.data.results);
        })
  };
  return (
    <div className="App">


    </div>
  );
}

export default App;
