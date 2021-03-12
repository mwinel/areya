import { FC } from "react";
import cn from "classnames";
import s from "./Select.module.css";
import { title } from "process";

interface SelectProps {
  className?: string;
  data?: any;
  onChange?: (...args: any[]) => any;
  title?: string;
}

const Select: FC<SelectProps> = (props) => {
  const { className, data, onChange } = props;

  const rootClassName = cn(s.root, {}, className);

  const handleOnChange = (e: any) => {
    if (onChange) {
      onChange(e.target.value);
    }
    return null;
  };

  let options = data.map((data: any) => (
    <option key={data.id} value={data.id}>
      {data.title}
    </option>
  ));

  return (
    <div>
      <select
        name="customSearch"
        className={rootClassName}
        onChange={handleOnChange}
      >
        {options}
      </select>
    </div>
  );
};

export default Select;
