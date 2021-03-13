import s from "./Checkbox.module.css";
import React, { InputHTMLAttributes } from "react";

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  onChange?: (...args: any[]) => any;
  onClick?: (...args: any[]) => any;
}

const Checkbox: React.FC<Props> = (props) => {
  const { className, children, onChange, onClick, ...rest } = props;

  return (
    <label>
      <input
        id="terms_of_service"
        type="checkbox"
        className={`form-checkbox ${s.root}`}
        onClick={onClick}
        {...rest}
      />
    </label>
  );
};

export default Checkbox;
