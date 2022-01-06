import { LinksFunction, MetaFunction } from 'remix';

export let meta: MetaFunction = () => {
  return {
    title: 'Pokemon Discovery',
    description: 'Discover new pokemon',
  };
};

export let links: LinksFunction = () => {
  return [];
};

export default function Index() {
  return <div className="w-full">Home</div>;
}
