import { Request, Response } from "express";
import PokemonsService from "../services/PokemonsService";

export function getAll(_:any, res:Response){
    const pokemones = PokemonsService.getAll();
    res.status(200).json(pokemones);
}
export function getNumber(req:Request, res:Response){
    try{
        const number= req.params.number && +req.params.number || undefined;
        if(!number){ throw "Se requiere el Numero del Pokemon."} 
        const pokemones = PokemonsService.getNumber(number);
        res.status(200).json(pokemones);
    }catch(error){
        res.status(400).send(error);
    }
}
export function getName(req:Request, res:Response){
    try{
        const name= req.params.name && req.params.name|| undefined;
        if(!name){ throw "Se requiere el nombre del Pokemon."} 
        const pokemones = PokemonsService.getName(name);
        res.status(200).json(pokemones);
    }catch(error){
        res.status(400).send(error);
    }
}
export function getType(req:Request, res:Response){
    try{
        const type= req.params.type && req.params.type|| undefined;
        if(!type){ throw "Se requiere el tipo del Pokemon."} 
        const pokemones = PokemonsService.getType(type);
        res.status(200).json(pokemones);
    }catch(error){
        res.status(400).send(error);
    }
}
export function getCreate(req: Request, res: Response) {
    try {
        const number = req.params.number && +req.params.number || undefined;
        const name = req.params.name && req.params.name;
        const tipo = req.params.nombreTipo && req.params.nombreTipo ;
        const fuerte = req.params.fuerteTipo && req.params.fuerteTipo ;
        const debil = req.params.debilTipo && req.params.debilTipo ;
        const img = req.params.img && req.params.img ;
        if(!number){ throw "Se requiere el numero del pokemon."}
        const pokemon = PokemonsService.getCreate(number,name,tipo,fuerte,debil,img);
        res.status(200).json(pokemon);
    } catch (error) {
        res.status(400).send(error);
    }
    
}
export function getFuerte(req: Request, res: Response) {
    try {
        const name = req.params.name && req.params.name;
        if(!name){ throw "Se requiere el numero del pokemon."}
        const pokemon = PokemonsService.getFuerte(name);
        res.status(200).json(pokemon);
    } catch (error) {
        res.status(400).send(error);
    }
    
}
export function getDebil(req: Request, res: Response) {
    try {
        const name = req.params.name && req.params.name;
        if(!name){ throw "Se requiere el numero del pokemon."}
        const pokemon = PokemonsService.getDebil(name);
        res.status(200).json(pokemon);
    } catch (error) {
        res.status(400).send(error);
    }
    
}