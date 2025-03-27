import { forwardRef } from "react";

// eslint-disable-next-line react/display-name
const IconComponent = forwardRef<HTMLDivElement, { icon: any }>(
  (props, ref): any => {
    const Icon = props.icon;
    return (
      <div
        ref={ref}
        className="text-4xl hover:scale-110 transition-transform duration-200"
      >
        <Icon />
      </div>
    );
  }
);
IconComponent.displayName = "IconComponent";
export default IconComponent;
