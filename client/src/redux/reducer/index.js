import { FILTER, GET_GENRES, GET_PLATFORMS, GET_VIDEO_GAMES, GET_VIDEO_GAME_BY_ID, ORDER, ORIGIN, SEARCH_BY_NAME, UPDATE } from "../actions/costants"

const initialState = {
    videoGames: [],
    displayableGames: [],
    genres: [],
    platforms: [],
    update: false,
    videoGame:{},
}

const rootReducer = (state=initialState, action) => {
    switch(action.type) {
        case GET_VIDEO_GAMES:
            return {
                ...state,
                videoGames: action.payload,
                displayableGames: action.payload,
            }
        case GET_PLATFORMS:
            let platforms = action.payload.map(v=> v.platforms).flat();
            let noRepetition = [];
            platforms.forEach(p => {
                if(!noRepetition.includes(p)){
                    noRepetition.push(p);
                }
            });
            return {
                ...state,
                platforms: noRepetition,
            }
        case GET_GENRES:
            return {
                ...state,
                genres: action.payload,
            }
        case GET_VIDEO_GAME_BY_ID:
            return {
                ...state,
                videoGame: action.payload,
            }
        case SEARCH_BY_NAME:
            return {
                ...state,
                displayableGames: action.payload,
            }
        case UPDATE:
            return {
                ...state,
                update: !state.update,
            }
        case ORDER:
            const unorderedVideoGames = state.videoGames;
            let orderedVideoGames = [];
            if(action.payload === 'ascending') {
                orderedVideoGames = unorderedVideoGames.sort((current, next) => {
                    if(current.name > next.name) return 1;
                    if(next.name > current.name) return -1;
                    return 0;
                });

            }else if(action.payload === 'descending') {
                orderedVideoGames = unorderedVideoGames.sort((current, next) => {
                    if(current.name > next.name) return -1;
                    if(next.name > current.name) return 1;
                    return 0;
                });
            }else if(action.payload ==='rating') {
                orderedVideoGames = unorderedVideoGames.sort((current, next) => {
                    if(current.rating > next.rating) return -1;
                    if(next.rating > current.rating) return 1;
                    return 0;
                });
            } 
            return {
                ...state,
                displayableGames: orderedVideoGames,
            }
        case FILTER:
            const unfilteredVideoGames = state.videoGames;
            const filteredVideoGames = unfilteredVideoGames.filter(v => v.genres.includes(action.payload));
            return {
                ...state,
                displayableGames: filteredVideoGames,
            }
        case ORIGIN:
            const unFilteredOrigin = state.videoGames;
            let filteredOrigin
            if(action.payload === 'api') {
                filteredOrigin = unFilteredOrigin.filter(v => typeof v.id === 'number');
            }else{
                filteredOrigin = unFilteredOrigin.filter(v => typeof v.id !== 'number')
            }
            return {
                ...state,
                displayableGames: filteredOrigin,
            }
        default: return state
    }
}

export default rootReducer