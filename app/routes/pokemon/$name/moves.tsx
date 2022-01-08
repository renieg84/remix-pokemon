import { LoaderFunction, useLoaderData } from 'remix';

export let loader: LoaderFunction = ({ params }) => {
  console.log(params.name);
  return params.name;
};

export default function MovesPage() {
  const data = useLoaderData();
  return <div>Moves info {data}</div>;
}
