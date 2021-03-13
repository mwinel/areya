import { FC } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import Logo from "../Logo";
import Search from "../Search";
import ProfileDropdown from "../ProfileDropdown";
import NavLink from "../NavLink";
import s from "./Nav.module.css";
import useRequest from "../../hooks/useRequest";

interface NavProps {}

const Nav: FC<NavProps> = () => {
  const router = useRouter();

  const { doRequest } = useRequest({
    url: "/api/v1/auth/signout",
    method: "post",
    body: {},
    onSuccess: () => router.push("/"),
  });

  const handleSignOut = async () => {
    await doRequest();
  };

  return (
    <>
      <nav className="flex-shrink-0 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            {/* Logo section */}
            <Logo className="text-indigo-100" />
            {/* Search section */}
            <Search />

            <div className="flex lg:hidden">
              {/* Mobile menu button */}
              <button
                type="button"
                className="bg-indigo-600 inline-flex items-center justify-center p-2 rounded-md text-indigo-400 hover:text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {/*
                    Icon when menu is closed.
      
                    Heroicon name: outline/menu-alt-1
      
                    Menu open: "hidden", Menu closed: "block"
                  */}
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
                {/*
                    Icon when menu is open.
      
                    Heroicon name: outline/x
      
                    Menu open: "block", Menu closed: "hidden"
                  */}
                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            {/* Links section */}
            <div className="hidden lg:block lg:w-80">
              <div className="flex items-center justify-end">
                <div className="flex">
                  <Link href="/support" passHref>
                    <NavLink title="Support" />
                  </Link>
                </div>
                {/* Profile dropdown */}
                <ProfileDropdown />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state. */}
        <div className="lg:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3">
            <a
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-indigo-800"
            >
              Dashboard
            </a>
            <a
              href="/"
              className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600"
            >
              Support
            </a>
          </div>
          <div className="pt-4 pb-3 border-t border-indigo-800">
            <div className="px-2">
              <a
                href="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600"
              >
                Your Profile
              </a>
              <a
                href="/"
                className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600"
              >
                Settings
              </a>
              <a
                href="/"
                className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600"
                onClick={() => handleSignOut()}
              >
                Sign out
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
