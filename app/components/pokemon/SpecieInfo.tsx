import { Link } from 'remix';
import SingleStat from './SingleStat';

export default function SpecieInfo({ specie }: any) {
  return (
    <div className="flex flex-col space-y-4">
      <div
        className="bg-amber-200 text-amber-700 mt-4 p-4 rounded-lg shadow-lg"
        dangerouslySetInnerHTML={{ __html: specie.flavorText }}
      />
      <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
        <div className="flex flex-row sm:flex-col sm:space-y-4 space-x-4 sm:space-x-0">
          <SingleStat text="Happiness" value={specie.happiness} />
          <SingleStat text="Capture rate" value={specie.captureRate} />
        </div>
        <div className="shadow-md font-semibold flex flex-col space-y-5 sm:w-1/2 bg-amber-200 rounded-md p-4 capitalize">
          <div className="w-full flex justify-between items-center">
            <span>Shape:</span>
            <span className="rounded-md bg-amber-500 text-white border-1 border-white px-2 p-1">
              {specie.shape}
            </span>
          </div>
          <div className="w-full flex justify-between items-center">
            <span>Color:</span>
            <span className="rounded-md bg-amber-500 text-white border-1 border-white px-2 p-1">
              {specie.color}
            </span>
          </div>
          <div className="w-full flex justify-between items-center">
            <span>Grow Rate:</span>{' '}
            <span className="rounded-md bg-amber-500 text-white border-1 border-white px-2 p-1">
              {specie.growthRate}
            </span>
          </div>
        </div>
        <div className="shadow-md font-semibold flex flex-col space-y-5 sm:w-1/2 bg-amber-200 rounded-md p-4 capitalize">
          <div className="w-full flex justify-between items-center">
            <span>Is Mythical:</span>{' '}
            <span className="rounded-md bg-amber-500 text-white border-1 border-white px-2 p-1">
              {specie.isMythical ? 'Yes' : 'No'}
            </span>
          </div>
          <div className="w-full flex justify-between items-center">
            <span>Is Legendary:</span>
            <span className="rounded-md bg-amber-500 text-white border-1 border-white px-2 p-1">
              {specie.isLegendary ? 'Yes' : 'No'}
            </span>
          </div>
          <div className="w-full flex justify-between items-center">
            <span>Evolve From:</span>
            <span className="rounded-md bg-amber-500 text-white border-1 border-white px-2 p-1">
              {' '}
              {specie.evolvesFrom ? (
                <Link to={`/pokemon/${specie.evolvesFrom}/specie`}>
                  {specie.evolvesFrom}
                </Link>
              ) : (
                'None'
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
