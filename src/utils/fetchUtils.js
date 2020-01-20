import axios from "axios";

const fetchUtils = {
    getPeople : async function(page = 1) {
        const baseUrl = "https://swapi.co/api/people";
        const res = await axios.get(baseUrl + `?search=a&page=${page}`);
        return {
                    data: res.data.results,
                    count: res.data.count
                }
    },

    search : async function( criteria, resource = "people", ) {
        const baseUrl = "https://swapi.co/api/";
        const res = await axios.get(`${baseUrl}${resource}/?search=${criteria}`);
        return {data: res.data.results}
    },
    ////not yet implemented to be used to replace mapping function
    fetchFilms : async function( filmsUrls ) {
        const fetchedFilms = [];
         filmsUrls.map( async (filmUrl) => {
            const res = await axios.get(filmUrl);
            fetchedFilms.push(res.data.title)
        });
        return fetchedFilms
    },
    ////not yet implemented to be used to fetch additional data for the modal
    fetchName : async function(url) {
        const res = await axios.get(url);
        return res.data.name;
    },

    getFilmName : function(film) {
        let filmName;
        const films = {
            "https://swapi.co/api/films/1/": "A New Hope",
            "https://swapi.co/api/films/2/": "The Empire Strikes Back",
            "https://swapi.co/api/films/3/": "Return of the Jedi",
            "https://swapi.co/api/films/4/": "The Phantom Menace",
            "https://swapi.co/api/films/5/": "Atack of the Clones",
            "https://swapi.co/api/films/6/": "Revenge of the Sith",
            "https://swapi.co/api/films/7/": "Force Awakens"
        };

        for (let key in films) {
            if (key === film) {
                filmName = films[key];
            }
        }
        return filmName
    }

};

export default fetchUtils;