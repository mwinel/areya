import { FC } from "react";
import { Nav } from "../components";

interface LayoutProps {}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div
        className="fixed top-0 left-0 w-1/2 h-full bg-white"
        aria-hidden="true"
      ></div>
      <div
        className="fixed top-0 right-0 w-1/2 h-full bg-gray-50"
        aria-hidden="true"
      ></div>
      <div className="relative min-h-screen flex flex-col">
        <Nav />
        {children}
      </div>
    </>
  );
};

export default Layout;
