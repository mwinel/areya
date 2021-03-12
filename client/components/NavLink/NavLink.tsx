import { FC } from "react";
import Link from "next/link";
import s from "./NavLink.module.css";

interface NavLinkProps {
  title: string;
  href?: string;
  onClick?: any;
  ref?: any;
}

const NavLink: FC<NavLinkProps> = ({ title, href, onClick, ref }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      ref={ref}
      className="px-3 py-2 rounded-md text-sm font-medium text-indigo-200 hover:text-white"
    >
      {title}
    </a>
  );
};

export default NavLink;
