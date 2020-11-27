import express from 'express';
import * as DigimonsController from './src/controllers/DigimonsController';
import * as PokemonController from './src/controllers/PokemonsController';

export const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World with Typescript!')
})

router.get('/ts', (req, res) => {
    res.send('Typescript es lo máximo!')
})

router.get('/digimons', DigimonsController.getAll);
router.get('/digimons/:id', DigimonsController.get);
router.get('/digimons/name/:name', DigimonsController.getName);
router.get('/digimons/type/:type', DigimonsController.getType);
router.get('/digimons/fuerte/:name', DigimonsController.getFuerte);
router.get('/digimons/debil/:name', DigimonsController.getDebil);
router.get('/digimons/create/:id/:name/:nombreTipo/:fuerteTipo/:debilTipo/:img', DigimonsController.getCreate);

router.get('/Pokemones', PokemonController.getAll);
router.get('/Pokemones/number/:number', PokemonController.getNumber);
router.get('/Pokemones/name/:name', PokemonController.getName);
router.get('/Pokemones/type/:type', PokemonController.getType);
router.get('/Pokemones/fuerte/:name', PokemonController.getFuerte);
router.get('/Pokemones/debil/:name', PokemonController.getDebil);
router.get('/Pokemones/create/:number/:name/:nombreTipo/:fuerteTipo/:debilTipo/:img', PokemonController.getCreate);

// router.get('/pokemones/fuerte/:name', PokemonController.getFuerte);

// router.get('/digimons/:id', DigimonsController.get);

router.post("/", (req, res) => {
    console.log("Cuerpo:", req.body);
    res.status(200).send(req.body);
});
