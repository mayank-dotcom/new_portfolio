'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';

// interface PokemonType {
//   type: {
//     name: string;
//   };
// }

// interface Pokemon {
//   id: number;
//   name: string;
//   height: number;
//   weight: number;
//   sprites: {
//     front_default: string;
//   };
//   types: PokemonType[];
// }
interface Abilitytype{
    ability: {
        name: string;
        url: string;
    };
}
interface Pokemon{
abilities: Abilitytype[];
}
export default function PracticePage() {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const { data } = await axios.get<Pokemon>('https://pokeapi.co/api/v2/pokemon/ditto');
        setPokemon(data);
      } catch (error) {
        console.error('Error:', error);
      } 
    };

    fetchPokemon();
  }, []);

 

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Pokemon Details</h1>
      <div className="p-4 bg-gray-200 rounded">
      
       {pokemon?.abilities.map((ability) => (
        <div key={ability.ability.name}>
          <h2>{ability.ability.name}</h2>
        </div>
       ))}
      </div>
    </div>
  );
}
