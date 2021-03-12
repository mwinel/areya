import { FC } from "react";
import s from "./Logo.module.css";

interface LogoProps {}

const Logo: FC<LogoProps> = ({}) => {
  return (
    <div className="flex items-center px-2 lg:px-0 xl:w-64">
      <div className="flex-shrink-0">
        <img
          className="h-8 w-auto"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-300.svg"
          alt="Workflow"
        />
      </div>
    </div>
  );
};

export default Logo;
