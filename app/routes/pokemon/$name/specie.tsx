import { LoaderFunction, useCatch, useLoaderData, useParams } from 'remix';
import SpecieInfo from '~/components/pokemon/SpecieInfo';

export let loader: LoaderFunction = async ({ params }) => {
  let res = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${params.name}`
  );
  if (res.status !== 200) {
    switch (res.status) {
      case 404:
        throw new Response('Pokemon specie not found.', {
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
    happiness: data.base_happiness,
    captureRate: data.capture_rate,
    color: data.color.name,
    shape: data.shape.name,
    growthRate: data.growth_rate.name,
    isLegendary: data.is_legendary,
    isMythical: data.is_mythical,
    evolvesFrom: data.evolves_from_species
      ? data.evolves_from_species.name
      : null,
    flavorText: data.flavor_text_entries.find(
      (e: { language: { name: string } }) => e.language.name === 'en'
    ).flavor_text,
  };
};

export default function SpeciePage() {
  const data = useLoaderData();
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="col-span-2 text-lg">
        <SpecieInfo specie={data} />
      </div>
    </div>
  );
}

export function CatchBoundary() {
  let caught = useCatch();
  let params = useParams();
  switch (caught.status) {
    case 404: {
      return (
        <div className="bg-red-200 text-red-700 p-4 font-semibold my-4 text-center border-2 border-red-700">
          Sorry but info for specie {params.jokeId} was not found.
        </div>
      );
    }
    case 401: {
      return (
        <div className="bg-red-200 text-red-700 p-4 font-semibold my-4 text-center border-2 border-red-700">
          Sorry, but something went wrong looking specie {params.jokeId}.
        </div>
      );
    }
    default: {
      throw new Error(`Unhandled error: ${caught.status}`);
    }
  }
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);

  let { jokeId } = useParams();
  return (
    <div className="error-container">{`There was an error loading joke by the id ${jokeId}. Sorry.`}</div>
  );
}
