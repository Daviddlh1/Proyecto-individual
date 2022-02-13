const { Router } = require('express');
const { Videogame, Genre } = require('../db');
const axios = require('axios');
const db = require('../db');
const router = Router();
const { API_KEY } = process.env

// https://api.rawg.io/api/games/{id}

async function findGameInApiById(id) {
    const apiResponse = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);
    const data = apiResponse.data
    const response = {
        id: data.id,
        name: data.name,
        image: data.background_image,
        description: data.description,
        release_date: data.released,
        rating: data.rating,
        platforms:data.platforms.map(p => p.platform.name),
        genres: data.genres.map(g => g.name),
    }
    console.log(response)
    return response
}

async function findGameInDbById(id) {
    const correctId = id.split('db')
    const game = await Videogame.findByPk(Number(correctId[0]), {include: Genre});
    return game
}

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try{
        let response = [];
        id.includes('db')? response = await findGameInDbById(id): response = await findGameInApiById(id)
        response? res.status(200).send(response): res.send({Err:'Not found'})
    }catch(err){
        res.send('Error in /videogame/:id route');
    }

})

router.post('/', async (req, res) => {
    const { name, image, description, release_date, rating, genres, platforms } = req.body;

    if(name && image && description && release_date && rating && genres && platforms){
        try{
            const validator = await Videogame.findAll({where: {
                name: name,
            }});
            if(!validator.length){
                const creatingVideoGame = await Videogame.create({
                    name,
                    image,
                    description,
                    release_date,
                    rating,
                    platforms,
                });
                const genresToAdd = await Genre.findAll({where:{
                    name: genres
                }});
                
                await creatingVideoGame.addGenres(genresToAdd);
                return res.status(200).send('New Game created');
            }else{
                return res.status(200).send('This game already exist');
            }
        }catch(err){
            return res.send('Error in videogame route', err);
        }
    }else{
        res.send('Pending info')
    }
})


module.exports = router;