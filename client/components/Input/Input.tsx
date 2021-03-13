import { FC } from "react";
import cn from "classnames";
import s from "./Input.module.css";

interface InputProps {
  className?: string;
  name?: string;
  placeholder?: string;
  type?: string;
  onChange?: (...args: any[]) => any;
  autoComplete?: any;
}

const Input: FC<InputProps> = (props) => {
  const {
    className,
    name,
    placeholder,
    type,
    children,
    onChange,
    autoComplete,
    ...rest
  } = props;

  const rootClassName = cn(s.root, {}, className);

  const handleOnChange = (e: any) => {
    if (onChange) {
      onChange(e.target.value);
    }
    return null;
  };

  return (
    <div>
      <div className="relative">
        <input
          className={rootClassName}
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={handleOnChange}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          {...rest}
        />
      </div>
    </div>
  );
};

export default Input;
