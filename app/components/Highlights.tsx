import { highlightsType } from "../types/highlightsType";

export const Highlights = ({ highlight, years, description }: highlightsType) => {
  return (
    <div className="space-y-1 sm:space-y-2">
      <div className="flex flex-wrap items-center gap-1 sm:gap-2">
        <h3 className="text-lg sm:text-xl font-medium">{highlight}</h3>
        <span className="text-xs sm:text-sm text-gray-400">({years})</span>
      </div>
      <p className="text-sm sm:text-lg text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
};
