import React , { useState , useEffect } from 'react';
import './css/App.css';
import SWLogo from "./assets/Star_Wars_Logo (1).svg"
import SearchBar from "./components/Search";
import ErrorPage from "./components/ErrorPage";
import Card from "./components/Card";
import ReactPaginate from 'react-paginate';
import fetchUtils from "./utils/fetchUtils";

const { getPeople } = fetchUtils;

function App() {
  const [ characters, setCharacters ] = useState([]);
  const [ numberOfPages, setNumberOfPages ] = useState();
  const [ errorStatus, setErrorStatus ] = useState(false);

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
          <ErrorPage/> }
        <ul>
          {characters.map(character => {
            return (
                <li>
                    <Card character={character}/>
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
