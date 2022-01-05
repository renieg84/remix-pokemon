import type { MetaFunction, LinksFunction, LoaderFunction } from 'remix';
import { useLoaderData } from 'remix';
import PokemonListItem from '~/components/PokemonListItem';
import SearchBar from '~/components/SearchBar';

export let meta: MetaFunction = () => {
  return {
    title: 'remix-worker-template',
    description: 'All-in-one remix starter template for Cloudflare Workers',
  };
};

export let links: LinksFunction = () => {
  return [];
};

export let loader: LoaderFunction = async ({ request }) => {
  let res = await fetch('https://pokeapi.co/api/v2/pokemon');
  return res.json();
};

export default function Index() {
  let data = useLoaderData();

  return (
    <div className="w-full">
      <div className="mb-4">
        <SearchBar />
      </div>
      <section className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.results.map((pokemon: any, index: number) => (
            <PokemonListItem key={index} pokemon={pokemon} />
          ))}
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            className="my-8 w-full max-w-xs px-4 py-2 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Load more
          </button>
        </div>
      </section>
    </div>
  );
}
