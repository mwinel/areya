import { FC, useState } from "react";
import { Transition } from "@headlessui/react";
import s from "./ProfileDropdown.module.css";
import Avatar from "../Avatar";

interface ProfileDropdownProps {}

const ProfileDropdown: FC<ProfileDropdownProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="ml-4 relative flex-shrink-0">
      <div>
        <Avatar
          className={s.avatar}
          // imageUrl="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixqx=MEMSAnRVfh&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80"
          imageAlt=""
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <div
          className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="user-menu"
        >
          <a
            href="/"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            role="menuitem"
          >
            View Profile
          </a>
          <a
            href="/"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            role="menuitem"
          >
            Settings
          </a>
          <a
            href="/"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            role="menuitem"
          >
            Logout
          </a>
        </div>
      </Transition>
    </div>
  );
};

export default ProfileDropdown;
