import { FC, useState, useEffect, InputHTMLAttributes } from "react";
import cn from "classnames";
import s from "./TextArea.module.css";

import { Text } from "@components/common";

interface TextAreaProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  onChange?: (...args: any[]) => any;
  label?: string;
  placeholder?: string;
  maxLength?: number;
  length?: number;
}

const TextArea: FC<TextAreaProps> = (props) => {
  const {
    className,
    children,
    onChange,
    placeholder,
    maxLength,
    ...rest
  } = props;

  const [charLimit, setCharLimit] = useState(maxLength);
  const [length, setLength] = useState(0);

  useEffect(() => {
    setCharLimit(maxLength);
  }, [maxLength]);

  const rootClassName = cn(s.root, {}, className);

  const handleOnChange = (e: any) => {
    if (onChange) {
      onChange(e.target.value);
      setLength(e.target.value.length);
    }
    return null;
  };

  let charLimitText;

  const difference = charLimit! - length;

  if (!length) {
    charLimitText = (
      <Text variant="small">
        Maximum <span className="font-medium">{charLimit}</span> characters.
      </Text>
    );
  } else if (length && length <= charLimit! - 1) {
    charLimitText = (
      <Text variant="small">
        <span className="font-medium">{difference}</span> characters left.
      </Text>
    );
  } else if (length == charLimit!) {
    charLimitText = (
      <Text variant="small" className="text-red">
        <span className="font-medium">Ooops! {difference}</span> characters
        left.
      </Text>
    );
  }

  return (
    <div>
      <textarea
        rows="3"
        className={rootClassName}
        placeholder={placeholder}
        onChange={handleOnChange}
        maxLength={maxLength}
        {...rest}
      ></textarea>
      {charLimitText}
    </div>
  );
};

export default TextArea;
