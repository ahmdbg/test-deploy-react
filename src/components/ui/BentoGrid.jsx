// BentoGrid.jsx
import { cn } from "../../utils/cn"; // relatif ke file utils.js kamu

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-3 auto-rows-fr ${className}`}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}) => {
  return (
    <div
      className={`flex flex-col space-y-4 ${className}`}
    >
      <div className="flex-1">
        {header}
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          {icon}
          <h3 className="font-semibold text-white text-lg">{title}</h3>
        </div>
        <p className="text-sm text-white/80 line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
};
