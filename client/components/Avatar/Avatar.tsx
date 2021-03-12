import { FC } from "react";
import s from './Avatar.module.css'

interface AvatarProps {
  imageUrl?: string;
  imageAlt?: string;
  className: string;
  onClick?: any;
}

const Avatar: FC<AvatarProps> = ({ className, imageUrl, imageAlt, onClick }) => {
  if (imageUrl) {
    return <img className={className} src={imageUrl} alt={imageAlt} onClick={onClick} />;
  }
  return (
    <>
      <svg
        className={className}
        fill="currentColor"
        viewBox="0 0 24 24"
        onClick={onClick}
      >
        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    </>
  );
};

export default Avatar;
