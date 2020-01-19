import React , { useState , useEffect } from 'react';
import './css/App.css';
import SWLogo from "./assets/Star_Wars_Logo (1).svg"
import CharacterAvatar from "./components/Avatar";
import SearchBar from "./components/Search";
import ErrorPage from "./components/ErrorPage";
import ReactPaginate from 'react-paginate';
import fetchUtils from "./utils/fetchUtils";
const { getPeople, search } = fetchUtils;

function App() {
  const [ characters, setCharacters ] = useState([]);
  const [ numberOfPages, setNumberOfPages ] = useState();
  const [ errorStatus, setErrorStatus ] = useState(false);
    console.log(errorStatus);
  useEffect(() => {
       getPeople()
          .then(res => {
              const {data, count} = res;
              setCharacters(data);
              setNumberOfPages(Math.ceil(count /10))
          }).catch(err => {
          setErrorStatus(true)
      })
  },[]);

  return (
    <div className="App">
      <section className={"hero"}>
          <img src={SWLogo} alt="Star Wars Logo"/>
          <SearchBar setCharacters={setCharacters} setErrorStatus={setErrorStatus}/>
      </section>
      <section className={"characters"}>
          {errorStatus &&
          <ErrorPage/>
          }
        <ul>
          {characters.map(character => {
            return (
                <li>
                    <h3>{character.name}</h3>
                    <CharacterAvatar options={character} hash={character.name}/>
                    <button onClick={search}>More Info....</button>
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
            pageRangeDisplayed={2}
            marginPagesDisplayed={1}
            onPageChange={pageIndex => {
                getPeople(pageIndex.selected + 1 )
                    .then((({data}) => {
                        setCharacters(data);
                }))

            }}/>
    </div>
  );
}

export default App;
