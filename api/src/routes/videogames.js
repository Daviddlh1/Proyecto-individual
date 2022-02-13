const express = require('express');
const router = express.Router();
const axios = require('axios');
const { Videogame, Genre } = require('../db');
const { API_KEY } = process.env;

async function getDb() {
    const DbGames = await Videogame.findAll({include: Genre});
    const info = DbGames.map(i => i.dataValues);
    const response = info.map(v=>{
        return{
            ...v,
            id: v.id + 'db'
        }
    })
    return response
}

function getApi() {
    return Promise.all([
        axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`),
        axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=2`),
        axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=3`),
        axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=4`),
        axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=5`),
    ]).then((apiInfo) => {
        let info = []
        apiInfo.forEach( videogames => {
            info = [...info, ...videogames.data.results];
        });
        const api = info.map(v => {
            return {
                id: v.id,
                name: v.name,
                released: v.released,
                image: v.background_image,
                rating: v.rating,
                platforms: v.platforms.map(p => p.platform.name),
                genres: v.genres.map(g => g.name),
            }
        })
        return api
    });
}

async function getAllGames() {
    const db = await getDb()
    const api = getApi()
    return api.then((apiInfo) => {
        let response = apiInfo.concat(db);
        return response;
    })
}

router.get('/', async (req, res) => {
    const {name} = req.query;
    try{
        const games = await getAllGames();
        if(!name){
            res.status(200).send(games);
        }else{

            const response = games.filter(g => g.name.split(' ').join('').toLowerCase().includes(name.split(' ').join('').toLowerCase()));
            res.status(200).send(response);       
        }
    }catch(err){    
        res.send('Error in /videogames route')
    }
})

module.exports = router