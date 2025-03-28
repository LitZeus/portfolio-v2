import { IconProps } from "@/app/types";
import { forwardRef } from "react";

interface IconComponentProps {
  icon: React.ComponentType<IconProps>;
  size?: number;
  color?: string;
}

const IconComponent = forwardRef<HTMLDivElement, IconComponentProps>(
  ({ icon: Icon, size = 35, color = "#9ca3af" }, ref) => {
    return (
      <div
        ref={ref}
        className="text-4xl hover:scale-110 transition-transform duration-200"
      >
        <Icon size={size} color={color} />
      </div>
    );
  }
);

IconComponent.displayName = "IconComponent";
export default IconComponent;
