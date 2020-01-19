import React, {useState} from 'react';
import fetchUtils from "../utils/fetchUtils";
import '../css/SearchBar.css'
const { search } = fetchUtils;

const SearchBar = ({ setCharacters, setErrorStatus }) => {
    const [ searchCriteria, setSearchCriteria ] = useState("");
    function handleChange(event) {
        const { value } = event.target;
        setSearchCriteria(value);
    }

    function handleClick(event) {
        event.preventDefault();
        setErrorStatus(false);
        search(searchCriteria)
            .then(({data}) => {
                if (data.length === 0) setErrorStatus(true);
                setCharacters(data)
            }).catch(err => {
            setErrorStatus(true)
        })
    }

    return (
        <div className={"search-form"}>
            <form  action="">
                <input onChange={handleChange} type="text" placeholder={"enter character name..."}/>
                <button onClick={handleClick} >Search the Galaxy</button>
            </form>
        </div>
    );
};

export default SearchBar;
