const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const pokemon = require('./models/pokemon.js');

// let pokemonLink = pokemon[req.params.id]


app.get('/', (req,res) => {
    res.send(`Welcome to the Pokemon App!`);
});

app.get('/pokemon', (req,res) => {
    res.render('index.ejs', {
        pokemonList: pokemon
    });
});

app.get('/pokemon/:id', (req,res) => {
    res.render('show.ejs', {
        pokemonData: pokemon[req.params.id]
    });
});

app.listen(port, () => {
    console.log(`Port in linked to: ${port}`);
});