import React , { useState , useEffect } from 'react';
import axios from "axios"
import './App.css';
import SWLogo from "./assets/Star_Wars_Logo (1).svg"
import CharacterAvatar from "./components/Avatar";

function App() {
  const [ characters, setCharacters ] = useState([]);

  useEffect(getPeople,[]);

  function getPeople(event) {
    if (event) event.preventDefault();
    axios.get("https://swapi.co/api/people/")
        .then(res => {
          console.log(res.data.results);
          setCharacters(res.data.results);
        })
  }

  return (
    <div className="App">
      <section className={"hero"}>
          <img src={SWLogo} alt="Star Wars Logo"/>
          <form action="">
              <input type="text"></input>
              <button placeholder={"enter character name..."}>Search the Galaxy</button>
          </form>
      </section>
      <section className={"characters"}>
        <ul>
          {characters.map(character => {
            return (
                <li>
                    <h3>{character.name}</h3>
                    <CharacterAvatar options={character} hash={character.name}/>
                </li>
            )
          })}
        </ul>
      </section>

    </div>
  );
}

export default App;
