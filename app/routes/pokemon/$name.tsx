import { HiArrowLeft } from 'react-icons/hi';
import { LoaderFunction, Outlet, useLoaderData, useNavigate } from 'remix';
import BaseInfo from '~/components/pokemon/BaseInfo';
import ExtendedInfo from '~/components/pokemon/ExtendedInfo';

export let loader: LoaderFunction = async ({ params }) => {
  let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
  if (res.status !== 200) {
    switch (res.status) {
      case 404:
        throw new Response('Pokemon not found.', {
          status: 404,
        });
      default:
        throw new Response('Something went wrong.', {
          status: 500,
        });
    }
  }
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
  let navigate = useNavigate();
  return (
    <div className="p-4 text-amber-700 flex flex-col items-center space-y-12 sm:space-y-20">
      <div className="flex flex-col sm:flex-row w-full sm:space-x-4">
        <div className="w-full sm:max-w-sm">
          <BaseInfo pokemon={data} />
        </div>
        <div className="flex-grow mt-6 sm:mt-0">
          <ExtendedInfo name={data.name}>
            <Outlet />
          </ExtendedInfo>
        </div>
      </div>
      <button
        onClick={() => navigate(-1)}
        className="border border-amber-500 focus:ring-2 focus:outline-none focus:ring-amber-500 hover:bg-amber-500 flex items-center space-x-2 bg-amber-200 hover:text-white text-amber-600 py-4 px-8 rounded-md font-semibold text-lg"
      >
        <HiArrowLeft className="w-5 h-5" />
        <span>Back</span>
      </button>
    </div>
  );
}
