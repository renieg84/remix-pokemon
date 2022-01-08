export default function Stats({ stats }: any) {
  return (
    <div className="flex flex-col justify-center space-y-3 w-full">
      {stats.map((stat: any, index: number) => {
        return (
          <div className="flex flex-col" key={index}>
            <div className="flex items-center justify-between text-sm font-bold">
              <h2 className="uppercase">{stat.stat.name}</h2>
              <span>{stat.base_stat}</span>
            </div>
            <div className="w-full h-2 rounded-r-full shadow-sm bg-amber-200">
              <div
                className="h-full pr-4 font-semibold text-right text-white rounded-r-full shadow-md bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600"
                style={{ width: `${Math.min(stat.base_stat, 100)}%` }}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
