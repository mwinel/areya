import { FC } from "react";

interface SearchProps {}

const Search: FC<SearchProps> = () => {
  return (
    <div className="flex-1 flex justify-center lg:justify-end">
      <div className="w-full px-2 lg:px-6">
        <label htmlFor="search" className="sr-only">
          Search by location, type or speciality...
        </label>
        <div className="relative text-indigo-200 focus-within:text-gray-400">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {/* Heroicon name: solid/search */}
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <input
            id="search"
            name="search"
            className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-indigo-400 bg-opacity-25 text-indigo-100 placeholder-indigo-200 focus:outline-none focus:bg-white focus:ring-0 focus:placeholder-gray-400 focus:text-gray-900 sm:text-sm"
            placeholder="Search by location, type or speciality..."
            type="search"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
