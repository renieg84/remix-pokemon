import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import {
  ActionFunction,
  Form,
  Link,
  LinksFunction,
  LoaderFunction,
  MetaFunction,
  useLoaderData,
  useSearchParams,
} from 'remix';
import PokemonListItem from '~/components/PokemonListItem';
import { PokemonSingle } from '~/types';

const LIMIT: number = 40;

export let meta: MetaFunction = () => {
  return {
    title: 'Pokemon List',
    description: 'List of all pokemon',
  };
};

export let links: LinksFunction = () => {
  return [];
};

export let loader: LoaderFunction = async ({ request }) => {
  let url = new URL(request.url);
  let page = url.searchParams.get('page') || 0;
  const offset = Math.max(+page, 0) * LIMIT;
  let res = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species?limit=${LIMIT}&offset=${offset}`
  );
  return res.json();
};

export default function PokemonHome() {
  let data = useLoaderData();

  let [searchParams] = useSearchParams();
  let page = searchParams.get('page') || 0;
  return (
    <div className="w-full">
      {/* <div className="mb:6 lg:mb-12">
        <SearchBar />
      </div> */}
      <section className="container mx-auto">
        <h1 className="text-xl font-semibold uppercase text-amber-700 text-center my-4">
          Pokemon List
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {data.results.map((pokemon: PokemonSingle, index: number) => (
            <PokemonListItem key={index} pokemon={pokemon} />
          ))}
        </div>
        <div className="flex justify-center space-x-4 text-amber-700 mt-8">
          <Link
            to={`?page=${Math.max(+page - 1, 0)}`}
            className="rounded-full p-2 text-base font-medium bg-amber-50 border border-amber-300 shadow-sm hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
          >
            <HiChevronLeft className="w-6 h-6" />
          </Link>
          <input type="hidden" name="page" value={0} />
          <Link
            to={`?page=${Math.min(+page + 1, Math.floor(+data.count / LIMIT))}`}
            className="rounded-full p-2 text-base font-medium bg-amber-50 border border-amber-300 shadow-sm hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
          >
            <HiChevronRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}
