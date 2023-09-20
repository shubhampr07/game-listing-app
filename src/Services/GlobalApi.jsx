import axios from "axios";

const key = '0d27b6c14380462a94aefe40052b994b';
const axiosCreate = axios.create({
    baseURL:'https://api.rawg.io/api'
})

const getGenreList = axiosCreate.get('/genres?key='+key);
const getAllGames = axiosCreate.get('/games?key='+key);
const getGameListByGenreId=(id)=>axiosCreate.get('/games?key='+key+'&genres='+id)

export default {
    getGenreList,
    getAllGames,
    getGameListByGenreId
}