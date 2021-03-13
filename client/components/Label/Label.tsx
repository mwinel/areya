import { FC, InputHTMLAttributes } from "react";
import cn from "classnames";
import s from "./Label.module.css";

interface TextAreaProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  title?: string;
}

const TextArea: FC<TextAreaProps> = (props) => {
  const { className, title } = props;

  const rootClassName = cn(s.root, {}, className);

  return (
    <div>
      <label className={rootClassName}>{title}</label>
    </div>
  );
};

export default TextArea;
