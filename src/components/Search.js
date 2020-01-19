import React, {useState} from 'react';
import fetchUtils from "../utils/fetchUtils";
const { search } = fetchUtils;

const SearchBar = ({ setCharacters }) => {
    const [ searchCriteria, setSearchCriteria ] = useState("");
    function handleChange(event) {
        const { value } = event.target;
        setSearchCriteria(value);
    }

    function handleClick(event) {
        event.preventDefault();
        search(searchCriteria)
            .then(({data}) => {
                console.log("data", data);
                setCharacters(data)
            })
    }

    return (
        <div>
            <form action="">
                <input onChange={handleChange} type="text" placeholder={"enter character name..."}/>
                <button onClick={handleClick} >Search the Galaxy</button>
            </form>
        </div>
    );
};

export default SearchBar;
