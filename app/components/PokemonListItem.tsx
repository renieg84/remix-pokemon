import { memo } from 'react';
import { Link } from 'remix';
import type { PokemonSingle } from '../types';

type Props = {
  pokemon: PokemonSingle;
};

function PokemonListItem({ pokemon }: Props) {
  const id = pokemon.url.split('/')[6];
  return (
    <Link to={`/pokemon/${pokemon.name}/specie`}>
      <div className="h-40 hover:shadow-xl hover:ring-2 hover:ring-amber-300 shadow-md flex flex-col items-center border border-amber-300 p-2 rounded-lg bg-amber-100">
        <img
          alt={pokemon.name}
          className="w-24 h-auto object-contain"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        />
        <h2 className="mt-2 text-lg font-bold text-amber-700 capitalize">
          {pokemon.name}
        </h2>
      </div>
    </Link>
  );
}
export default memo(PokemonListItem);
