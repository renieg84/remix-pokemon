import { Link } from 'remix';

type Props = {
  children: React.ReactNode;
  name: string;
};

const options = [
  { name: 'Specie Info', path: 'specie' },
  { name: 'Moves Info', path: 'moves' },
  // { name: 'test 3', path: '' },
  // { name: 'test 4', path: '' },
];

export default function ExtendedInfo({ children, name }: Props) {
  return (
    <div className="flex flex-col divide-y divide-amber-200 space-y-2">
      <nav>
        <ul className="flex justify-center items-center space-x-8 font-semibold text-lg">
          {options.map((option: any, index: number) => {
            return (
              <li
                className="rounded-md bg-amber-200 text-amber-700 py-2 px-4"
                key={index}
              >
                <Link to={`/pokemon/${name}/${option.path}`} replace>
                  {option.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div>{children}</div>
    </div>
  );
}
