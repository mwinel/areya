import { FC } from "react";
import Link from "next/link";
import cn from "classnames";
import s from "./Logo.module.css";

interface LogoProps {
  className?: any;
}

const Logo: FC<LogoProps> = ({ className }) => {
  const rootClassName = cn(s.root, className);

  return (
    <Link href="/">
      <div>
        <span className="sr-only">areya</span>
        <a className={rootClassName}>areya .:</a>
      </div>
    </Link>
  );
};

export default Logo;
