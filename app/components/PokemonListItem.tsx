import type { PokemonSingle } from '../types';

type Props = {
  pokemon: PokemonSingle;
};

export default function PokemonListItem({ pokemon }: Props) {
  const id = pokemon.url.split('/')[6];
  return (
    <div className="flex flex-col items-center border border-amber-300 p-2 rounded-lg">
      <img
        alt={pokemon.name}
        className="w-32 h-auto rounded-full"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
      />
      <h2 className="mt-2 text-lg font-bold text-gray-700">{pokemon.name}</h2>
    </div>
  );
}
