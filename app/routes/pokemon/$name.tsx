import { LoaderFunction, useLoaderData, useParams } from 'remix';

export let loader: LoaderFunction = async ({ params }) => {
  let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
  const data = await res.json();
  return data;
};

export default function PokemonDetail() {
  const data = useLoaderData();
  return (
    <div>
      <h1 className="text-2xl">Pokemon detail: {data.name}</h1>
      <div className="p-4 bg-amber-100 text-amber-700">
        {JSON.stringify(data)}
      </div>
    </div>
  );
}
