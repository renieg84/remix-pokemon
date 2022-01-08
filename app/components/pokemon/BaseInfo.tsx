import Stats from './Stats';

export default function BaseInfo({ pokemon }: any) {
  const name = pokemon.name.split('-').join(' ');
  return (
    <div className="mx-auto py-4 w-full flex flex-col items-center justify-center h-full border border-amber-500 rounded-md bg-amber-100">
      <h1 className="text-2xl uppercase font-semibold">{name}</h1>
      <img className="h-60 w-60 p-0" src={pokemon.image} alt={name} />
      <div className="flex items-center justify-around space-x-3 mb-2">
        {pokemon.types.map((type: any, index: number) => {
          return (
            <span
              key={index}
              className="uppercase shadow-md text-xs rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600  text-white px-2 py-1 font-semibold"
            >
              {type.type.name}
            </span>
          );
        })}
      </div>
      <div className="flex space-x-4 my-2">
        <div>
          Height: <span className="font-semibold">{pokemon.height / 10} m</span>
        </div>
        <div>
          Weight :{' '}
          <span className="font-semibold">{pokemon.weight / 10} kg</span>
        </div>
      </div>
      <div className="font-bold text-xl">
        EXP:{' '}
        <span className="font-bold text-amber-700 text-xl">
          {pokemon.experience}
        </span>
      </div>
      <div className="w-full px-2">
        <Stats stats={pokemon.stats} />
      </div>
    </div>
  );
}
