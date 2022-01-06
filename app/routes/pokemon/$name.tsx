import { LoaderFunction, useLoaderData, useParams } from 'remix';

export let loader: LoaderFunction = async ({ params }) => {
  let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
  const data = await res.json();
  return data;
};

export default function PokemonDetail() {
  const data = useLoaderData();
  const name = data.name.split('-').join(' ');
  return (
    <div>
      <div className="p-4 text-amber-700">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col col-span-1 space-y-3">
            {data.stats.map((stat) => {
              return (
                <div className="flex flex-col">
                  <h2 className="font-bold uppercase text-sm">
                    {stat.stat.name}
                  </h2>
                  <div className="w-full h-6 bg-gray-200 rounded-r-full">
                    <div
                      className="h-full bg-amber-400 rounded-r-full text-right pr-4"
                      style={{ width: `${stat.base_stat}%` }}
                    >
                      {stat.base_stat}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col items-center justify-center h-full col-span-1">
            <h1 className="text-2xl uppercase font-semibold">{name}</h1>
            <img
              className="h-60 w-60 p-0"
              src={data.sprites.front_default}
              alt={name}
            />
            <div className="flex items-center justify-around space-x-3 mb-2">
              {data.types.map((type) => {
                return (
                  <span className="uppercase shadow-md text-xs rounded-full bg-blue-500 text-white px-2 py-1 font-semibold">
                    {type.type.name}
                  </span>
                );
              })}
            </div>
            <div className="flex space-x-4">
              <div>
                Height:{' '}
                <span className="font-semibold">{data.height / 100} m</span>
              </div>
              <div>
                Weight :{' '}
                <span className="font-semibold">{data.weight / 10} kg</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
