import { highlightsType } from "../types/highlightsType";

export const Highlights = ({ highlight, years, description }: highlightsType) => {
  return (
    <div>
      <h3 className="text-xl inline">{highlight}</h3>
      <span className="text-sm text-gray-400"> ({years})</span>
      <p className="text-lg text-gray-400">{description}</p>
    </div>
  );
};
