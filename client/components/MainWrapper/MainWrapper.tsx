import { FC, useState } from "react";
import { Transition } from "@headlessui/react";

import s from "./MainWrapper.module.css";
import ListItem from "../ListItem";

interface MainWrapperProps {}

const MainWrapper: FC<MainWrapperProps> = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white lg:min-w-0 lg:flex-1">
      <div className="pl-4 pr-6 pt-4 pb-4 border-b border-t border-gray-200 sm:pl-6 lg:pl-8 xl:pl-6 xl:pt-6 xl:border-t-0">
        <div className="flex items-center">
          <h1 className="flex-1 text-lg font-medium">Results</h1>
          <div className="relative">
            <button
              type="button"
              className="w-full bg-white border border-gray-300 rounded-md shadow-sm px-4 py-2 inline-flex justify-center text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
              id="sort-menu"
              aria-expanded="false"
              aria-haspopup="true"
              onClick={() => setIsOpen(!isOpen)}
            >
              {/* Heroicon name: solid/sort-ascending */}
              <svg
                className="mr-3 h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h5a1 1 0 000-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM13 16a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z" />
              </svg>
              Sort By
              {/* Heroicon name: solid/chevron-down */}
              <svg
                className="ml-2.5 -mr-1.5 h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {/* Dropdown menu, show/hide based on menu state. */}
            <Transition
              show={isOpen}
              enter="transition ease-out duration-50"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-0 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-0 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <div
                className="origin-top-right z-10 absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="sort-menu"
              >
                <div className="py-1" role="none">
                  <a
                    href="/"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Name
                  </a>
                  <a
                    href="/"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Type
                  </a>
                  <a
                    href="/"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Category
                  </a>
                  <a
                    href="/"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Specialty
                  </a>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </div>

      {children}

      {/* {h.map((hospital, index) => {
        <ListItem
          hospitalName={hospital.hospitalName}
          location={hospital.location}
          hospitalType={hospital.hospitalType}
          phoneNumber={hospital.phoneNumber}
          emergencyHotline={hospital.emergencyHotline}
        />;
      })}
      <div>hahaha</div> */}
    </div>
  );
};

export default MainWrapper;
