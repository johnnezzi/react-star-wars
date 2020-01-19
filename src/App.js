import React , { useState , useEffect } from 'react';
import axios from "axios"
import './App.css';
import SWLogo from "./assets/Star_Wars_Logo (1).svg"
import CharacterAvatar from "./components/Avatar";
import ReactPaginate from 'react-paginate';

function App() {
  const [ characters, setCharacters ] = useState([]);
  const [ numberOfPages, setNumberOfPages ] = useState(() => getPeople());

  useEffect(getPeople,[]);


  function getPeople(page = 1) {
    const baseUrl = "https://swapi.co/api/people/";
    const url = page ? baseUrl : baseUrl + `?search=a&page=${page}`;
    axios.get(url)
        .then(res => {
          console.log(res.data.results);
          setCharacters(res.data.results);
          return getNumberOfPages(res.data.count);
        })
  }

  function getNumberOfPages(numberOfCharacters) {
         const noOfPages = Math.ceil(numberOfCharacters / 10);
         setNumberOfPages(noOfPages);
         return noOfPages

    };




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
                    <button>More Info....</button>
                </li>
            )
          })}
        </ul>
      </section>
        <ReactPaginate
            containerClassName={'pagination'}
            subContainerClassName={'pages-pagination'}
            breakLabel={'...'}
            activeClassName={'active'}
            pageCount={numberOfPages}
            pageRangeDisplayed={3}
            marginPagesDisplayed={1}/>
    </div>
  );
}

export default App;
