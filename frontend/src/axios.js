import axios from "axios";
// url base para pedir a database dos filmes
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;