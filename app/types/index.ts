import type { JSX } from "react";
export * from "./contactDataType";
export * from "./highlightsType";
export * from "./project";

export interface IconProps {
  color?: string;
  size?: number;
}

export type IconComponent = ({ color, size }: IconProps) => JSX.Element;

export type iconType = {
  name: string;
  icon: IconComponent;
  color: string;
};

