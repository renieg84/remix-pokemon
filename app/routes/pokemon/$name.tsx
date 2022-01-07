import { HiArrowLeft } from 'react-icons/hi';
import { LoaderFunction, useLoaderData, useNavigate } from 'remix';

export let loader: LoaderFunction = async ({ params }) => {
  let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
  const data: any = await res.json();
  return {
    name: data.name,
    types: data.types,
    stats: data.stats,
    image:
      data.sprites.other['official-artwork'].front_default ||
      data.sprites.front_default,
    height: data.height,
    weight: data.weight,
    experience: data.base_experience,
  };
};

export default function PokemonDetail() {
  const data = useLoaderData();
  const name = data.name.split('-').join(' ');
  let navigate = useNavigate();
  return (
    <div className="p-4 text-amber-700 flex flex-col items-center space-y-12 sm:space-y-24">
      <div className="grid grid-cols-2 gap-4 w-full">
        <div className="mx-auto py-4 w-full max-w-xs flex flex-col items-center justify-center h-full col-span-2 sm:col-span-1 border border-amber-500 rounded-md bg-amber-100">
          <h1 className="text-2xl uppercase font-semibold">{name}</h1>
          <img className="h-60 w-60 p-0" src={data.image} alt={name} />
          <div className="flex items-center justify-around space-x-3 mb-2">
            {data.types.map((type: any) => {
              return (
                <span className="uppercase shadow-md text-xs rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600  text-white px-2 py-1 font-semibold">
                  {type.type.name}
                </span>
              );
            })}
          </div>
          <div className="flex space-x-4 my-2">
            <div>
              Height:{' '}
              <span className="font-semibold">{data.height / 100} m</span>
            </div>
            <div>
              Weight :{' '}
              <span className="font-semibold">{data.weight / 10} kg</span>
            </div>
          </div>
          <div className="font-bold text-xl">
            EXP:{' '}
            <span className="font-bold text-amber-700 text-xl">
              {data.experience}
            </span>
          </div>
        </div>
        <div className="flex flex-col col-span-2 sm:col-span-1 space-y-3 justify-center">
          {data.stats.map((stat: any) => {
            return (
              <div className="flex flex-col">
                <h2 className="font-bold uppercase text-sm">
                  {stat.stat.name}
                </h2>
                <div className="w-full h-6 bg-amber-200 rounded-r-full shadow-sm">
                  <div
                    className="h-full shadow-md bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 rounded-r-full text-right pr-4 font-semibold text-white"
                    style={{ width: `${Math.min(stat.base_stat, 100)}%` }}
                  >
                    {stat.base_stat}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <button
        onClick={() => navigate(-1)}
        className="border border-amber-500 focus:ring-2 focus:outline-none focus:ring-amber-500 hover:bg-amber-500 flex items-center space-x-2 bg-amber-400 hover:text-white text-amber-600 py-4 px-8 rounded-full font-semibold text-lg"
      >
        <HiArrowLeft className="w-5 h-5" />
        <span>Back</span>
      </button>
    </div>
  );
}
