import { FC } from "react";

export * from "./contactDataType";
export * from "./highlightsType";
export * from "./iconT";
export * from "./project";

interface IconProps {
  color?: string;
  size?: number;
}

export type iconType = {
  name: string;
  icon: FC<IconProps>;
  color: string;
};

