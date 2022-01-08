type TSingleStat = {
  value: number | string;
  text: string;
};

export default ({ value, text }: TSingleStat) => {
  return (
    <div className="flex p-2 flex-col h-20 w-full min-w-max bg-amber-200 rounded-md justify-end items-center">
      <h1 className="text-4xl">{value}</h1>
      <span className="text-sm">{text}</span>
    </div>
  );
};
