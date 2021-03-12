import React, {
  FC,
  JSXElementConstructor,
  CSSProperties,
  ComponentType,
} from "react";
import cn from "classnames";
import s from "./Text.module.css";

interface TextProps {
  variant?: Variant;
  className?: string;
  style?: CSSProperties;
  children?: React.ReactNode | any;
  html?: string;
  onClick?: any;
}

type Variant = "heading" | "body" | "pageHeading" | "sectionHeading" | "small";

const Text: FC<TextProps> = ({
  style,
  className = "",
  variant = "body",
  children,
  html,
  onClick,
}) => {
  const componentsMap: {
    [P in Variant]: ComponentType<any> | string;
  } = {
    body: "p",
    small: "p",
    heading: "h1",
    pageHeading: "h2",
    sectionHeading: "h3",
  };

  const Component:
    | JSXElementConstructor<any>
    | React.ReactElement<any>
    | React.ComponentType<any>
    | string = componentsMap![variant!];

  const htmlContentProps = html
    ? {
        dangerouslySetInnerHTML: { __html: html },
      }
    : {};

  return (
    <Component
      className={cn(
        s.root,
        {
          [s.small]: variant === "small",
          [s.body]: variant === "body",
          [s.heading]: variant === "heading",
          [s.pageHeading]: variant === "pageHeading",
          [s.sectionHeading]: variant === "sectionHeading",
        },
        className,
      )}
      style={style}
      onClick={onClick}
      {...htmlContentProps}
    >
      {children}
    </Component>
  );
};

export default Text;
