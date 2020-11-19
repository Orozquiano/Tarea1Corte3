import { json } from "body-parser";
import { PokemonI } from "../interfaces/PokemonInterfaces";
const db = require('../db/Pokemons.json');

module PokemonsService {
    export function getAll(): Array<PokemonI> {
        const pokemones: Array<PokemonI> = db;
        return pokemones
    }
    export function getNumber(number: number): PokemonI {
        const pokemones: Array<PokemonI> = db;
        const pokemon: Array<PokemonI> = pokemones.filter(e => e.number === number);
        if (pokemon.length < 1) {
            throw "No se encontraton pokemones";
        }
        return pokemon[0]
    }
    export function getName(name: string): PokemonI {
        const pokemones: Array<PokemonI> = db;
        const pokemon: Array<PokemonI> = pokemones.filter(function (el) {
            return el.name.toLowerCase().indexOf(name.toLowerCase()) > -1;
        })
        if (pokemon.length < 1) {
            throw "No se encontraton pokemones";
        }
        return pokemon[0]
    }
    export function getType(type: string): Array<PokemonI> {
        const pokemones: Array<PokemonI> = db;
        let matches: Array<PokemonI> = [];
        pokemones.forEach(pokemon => {
            const found = pokemon.type.filter(e => e.name === type);
            if (found.length > 0) {
                matches.push(pokemon);
            }
        })
        if (matches.length < 1) {
            throw "No se encontro el tipo";
        }

        return matches;
    }
    export function getCreate(number:number,name:string,nameTipo:string,strongAgainst2:string,weakAgainst2:string,img:string): PokemonI {
        const digimons: Array<PokemonI> = db;
        const obj: PokemonI={
            number:number,
            name:name,
            type:[
                {name:nameTipo,strongAgainst:strongAgainst2,weakAgainst:weakAgainst2}
            ],
            img:img

        }
        db.push(obj);
        return db;
    }
    export function getFuerte(name:string): Array<PokemonI> {
        const pokemones: Array<PokemonI> = db;
        let pokemon = pokemones.filter(e=>e.name.toLowerCase()=== name.toLowerCase());
        if(pokemon.length<1){
            throw "No se encontro el primer pokemon";
        }
        const type1 = pokemon[0].type.filter(e=> e.name);
        let matches: Array<PokemonI> = [];

        pokemones.forEach(pokemon => {
            const found = pokemon.type.filter(e => e.weakAgainst === type1[0].name);
            if (found.length > 0) {
                matches.push(pokemon);
            }
        })
        if (matches.length < 1) {
            throw "No se encontro el tipo";
        }

        return matches;
    }
    export function getDebil(name:string): Array<PokemonI> {
        const pokemones: Array<PokemonI> = db;
        let pokemon = pokemones.filter(e=>e.name.toLowerCase()=== name.toLowerCase());
        if(pokemon.length<1){
            throw "No se encontro el primer pokemon";
        }
        const type1 = pokemon[0].type.filter(e=> e.name);
        let matches: Array<PokemonI> = [];

        pokemones.forEach(pokemon => {
            const found = pokemon.type.filter(e => e.strongAgainst === type1[0].name);
            if (found.length > 0) {
                matches.push(pokemon);
            }
        })
        if (matches.length < 1) {
            throw "No se encontro";
        }

        return matches;
    }
}    
export default PokemonsService;