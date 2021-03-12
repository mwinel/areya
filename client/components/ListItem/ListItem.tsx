import { FC } from "react";
import s from "./ListItem.module.css";

interface ListItemProps {
  hospitalName: string;
  location: string;
  hospitalType: string;
  phoneNumber: string;
  emergencyHotline: string;
}

const ListItem: FC<ListItemProps> = ({
  hospitalName,
  location,
  hospitalType,
  phoneNumber,
  emergencyHotline,
}) => {
  return (
    <ul className="relative z-0 divide-y divide-gray-200 border-b border-gray-200">
      <li className="relative pl-4 pr-6 py-5 hover:bg-gray-50 sm:py-6 sm:pl-6 lg:pl-8 xl:pl-6">
        <div className="flex items-center justify-between space-x-4">
          <div className="min-w-0 ">
            <div className="flex items-center space-x-4">
              <span className="block">
                <h2 className="text-lg font-medium text-indigo-600 mb-1">
                  <a href="/">
                    <span
                      className="absolute inset-0"
                      aria-hidden="true"
                    ></span>
                    {hospitalName}
                  </a>
                </h2>
              </span>
            </div>

            <a href="/" className="relative group flex items-center space-x-3">
              <span className="text-sm text-gray-500 group-hover:text-gray-900 truncate">
                {location}
              </span>
            </a>

            <a href="/" className="relative group flex items-center space-x-3">
              <span className="font-semibold text-gray-500 text-sm">{phoneNumber}</span>
              <span aria-hidden="true">&middot;</span>
              <span className="text-red-600 text-sm font-semibold">
                {emergencyHotline}
              </span>
            </a>
          </div>
          <div className="sm:hidden">
            {/* Heroicon name: solid/chevron-right */}
            <svg
              className="h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <div className="hidden sm:flex flex-col flex-shrink-0 items-end space-y-3">
            <p className="flex items-center space-x-4">
              <button
                className="relative bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                type="button"
              >
                {/* <span className="sr-only">Add to favorites</span> */}
                {/* Heroicon name: solid/star */}
                <svg
                  className="h-5 w-5 text-yellow-300 hover:text-yellow-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </button>
            </p>
            <p className="flex text-gray-500 text-sm space-x-2">
              <span>{hospitalType}</span>
              {/* <span aria-hidden="true">&middot;</span>
              <span className="font-semibold">{phoneNumber}</span>
              <span aria-hidden="true">&middot;</span>
              <span className="text-red-600 font-semibold">
                {emergencyHotline}
              </span> */}
            </p>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default ListItem;
