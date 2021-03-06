import { HiSearch } from 'react-icons/hi';
export default function SearchBar() {
  return (
    <form
      method="get"
      action=""
      className="flex flex-col items-center flex-1 max-w-xl mx-auto space-y-4"
    >
      <div className="relative w-full mt-1 rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 flex items-center pl-6 pointer-events-none">
          <HiSearch className="w-5 h-5 text-amber-600" aria-hidden="true" />
        </div>
        <input
          type="text"
          placeholder="Find your favorite pokemon..."
          className="placeholder:text-amber-500 w-full p-4 pl-12 italic border rounded-full hover:shadow-md border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-300"
        />
      </div>
      <button
        type="submit"
        className="w-full max-w-xs px-4 py-2 text-base font-medium text-amber-600 bg-amber-50 border border-amber-300 rounded-md shadow-sm hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 hover:text-amber-700"
      >
        Search
      </button>
    </form>
  );
}
