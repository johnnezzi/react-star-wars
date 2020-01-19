import React from 'react';
import fetchUtils from "../utils/fetchUtils";
const { getFilmName } = fetchUtils;


const AdditionalDetails = ({options}) => {

    return (
        <div>
            <p>Name: {options.name}</p>
            <p>Birth Year: {options.birth_year}</p>
            <p>Gender: {options.gender}</p>
            <p>Films: {options.films.map(film => {
                return (<p key={getFilmName(film)}>{getFilmName(film)}</p>)
            })
            }
            </p>

        </div>
    );
};

export default AdditionalDetails;
