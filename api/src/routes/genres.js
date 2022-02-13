const { Router } = require('express');
const { Genre } = require('../db');
const router = Router();

router.get('/', async (req, res) => {
    try{
        const response = await Genre.findAll();
        res.status(200).send(response);
    }catch(err){
        res.send('Error in /videogame route')
    }
})

module.exports = router;
