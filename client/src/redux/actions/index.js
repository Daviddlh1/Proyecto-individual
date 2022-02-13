import { FILTER, GET_GENRES, GET_PLATFORMS, GET_VIDEO_GAMES, GET_VIDEO_GAME_BY_ID, ORDER, ORIGIN, POST_VIDEO_GAME, SEARCH_BY_NAME } from "./costants";
import axios from "axios" 



export function getVideoGames() {
    return async function(dispatch) {
        const response = await axios.get(`http://localhost:3001/videogames`);
        return dispatch({
            type: GET_VIDEO_GAMES,
            payload: response.data,
        });
    }
}

export function postVideoGame(game) {
    return async function(dispatch) {
        const response = axios.post(`http://localhost:3001/videogame`, game);
        return dispatch({
            type: POST_VIDEO_GAME,
            payload: response.data,
        })
    }
}

export function getGenres() {
    return async function (dispatch) {
        const response = await axios.get(`http://localhost:3001/genres`);
        return dispatch({
            type: GET_GENRES,
            payload: response.data,
        })
    }
}

export function getPlatforms () {
    return async function(dispatch){
        const response = await axios.get(`http://localhost:3001/videogames`);
        return dispatch({
            type:GET_PLATFORMS,
            payload: response.data,
        })

    }
}

export function order(orderBy) {
    return {
        type: ORDER,
        payload: orderBy,
    }
}

export function filter(filterBy) {
    return {
        type: FILTER,
        payload: filterBy,
    }
}

export function origin(origin){
    return {
        type: ORIGIN,
        payload: origin,
    }
}

export function searchByName(name) {
    return async function(dispatch){
        const response = await axios.get(`http://localhost:3001/videogames?name=${name}`);
        return dispatch({
            type: SEARCH_BY_NAME,
            payload: response.data,
        })
    }
}

export function getVideoGameByID(id) {
    return async function(dispatch) {
        const response = await axios.get(`http://localhost:3001/videogame/${id}`);
        return dispatch({
            type: GET_VIDEO_GAME_BY_ID,
            payload: response.data,
        });
    }
}