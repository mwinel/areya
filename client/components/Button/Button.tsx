import {
  FC,
  forwardRef,
  BaseHTMLAttributes,
  JSXElementConstructor,
  useRef,
} from "react";
import cn from "classnames";
import mergeRefs from "react-merge-refs";

import s from "./Button.module.css";

export interface ButtonProps extends BaseHTMLAttributes<HTMLButtonElement> {
  href?: string;
  className?: string;
  variant?: "primary" | "secondary" | "danger";
  active?: boolean;
  type?: "submit" | "reset" | "button";
  Component?: string | JSXElementConstructor<any>;
  width?: string | number;
  loading?: boolean;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = forwardRef((props, buttonRef) => {
  const {
    className,
    variant = "primary",
    children,
    active,
    onClick,
    width,
    Component = "button",
    disabled = false,
    style = {},
  } = props;

  const ref = useRef<typeof Component>(null);

  const rootClassName = cn(
    s.root,
    {
      [s.primary]: variant === "primary",
      [s.secondary]: variant === "secondary",
      [s.danger]: variant === "danger",
      [s.disabled]: disabled,
    },
    className
  );

  return (
    <Component
      aria-pressed={active}
      data-variant={variant}
      ref={mergeRefs([ref, buttonRef])}
      className={rootClassName}
      disabled={disabled}
      style={{ width, ...style }}
      onClick={onClick}
    >
      {children}
    </Component>
  );
});

export default Button;
