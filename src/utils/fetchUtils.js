import axios from "axios";

const fetchUtils = {
    getPeople : async function(page = 1) {
        console.log("called", page);
        const baseUrl = "https://swapi.co/api/people";
        const res = await axios.get(baseUrl + `?search=a&page=${page}`);
        return {
                    data: res.data.results,
                    count: res.data.count
                }
    },

    search : async function( criteria, resource = "people", ) {
        console.log("searching");
        const baseUrl = "https://swapi.co/api/";
        const res = await axios.get(`${baseUrl}${resource}/?search=${criteria}`);
        console.log(res.data.results);
        return {data: res.data.results}
    }
};

export default fetchUtils;