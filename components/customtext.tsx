"use client";

import { ReactNode } from "react";

interface CustomTextProps {
  children: ReactNode;
  title?: boolean;
  highlightedTitle?: boolean;
  description?: boolean;
  highlightedDescription?: boolean;
  numeric?: boolean;
}

const CustomText: React.FC<CustomTextProps> = ({
  children,
  title = false,
  highlightedTitle = false,
  description = false,
  highlightedDescription = false,
  numeric = false,
}) => {
  let className = numeric
    ? "font-secondary font-extrabold "
    : title || highlightedTitle
      ? "font-primary "
      : "font-secondary ";

  className += description
    ? "font-regular "
    : highlightedDescription
      ? "font-extrabold "
      : "";

  if (title)
    className +=
      "text-3xl sm:text-4xl md:text-5xl lg:text-6xl lg:max-w-[95%] xl:max-w-[80%] leading-tight tracking-wide lowercase flex flex-wrap text-secondary";
  else if (highlightedTitle)
    className +=
      "text-3xl sm:text-4xl md:text-5xl lg:text-6xl lg:max-w-[95%] xl:max-w-[80%] leading-tight tracking-wide lowercase flex flex-wrap text-primary whitespace-nowrap";
  else if (description)
    className += "text-md md:text-xl lg:text-2xl text-justify text-secondary";
  else if (highlightedDescription)
    className += "text-md md:text-xl lg:text-2xl text-justify text-secondary";

  return (
    <span
      className={className}
      onMouseEnter={() => {
        title: highlightedTitle;
      }}
    >
      {children}
    </span>
  );
};

export default CustomText;
