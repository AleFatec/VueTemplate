import axios from 'axios';

const getPokemons = (id) => axios.get('https://pokeapi.co/api/v2/pokemon/'+id);

export  {
    getPokemons,
}