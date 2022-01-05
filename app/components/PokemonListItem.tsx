import type { PokemonSingle } from '../types';

type Props = {
  pokemon: PokemonSingle;
};

export default function PokemonListItem({ pokemon }: Props) {
  const id = pokemon.url.split('/')[6];
  return (
    <div className="hover:shadow-xl hover:ring-2 hover:ring-amber-300 shadow-md flex flex-col items-center border border-amber-300 pb-2 rounded-lg bg-amber-100">
      <img
        alt={pokemon.name}
        className="w-64 h-auto"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
      />
      <h2 className="mt-2 text-lg font-bold text-amber-700">{pokemon.name}</h2>
    </div>
  );
}
