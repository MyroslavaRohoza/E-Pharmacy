import css from "./icon.module.css";
import { icons as sprite } from "../../assets/index.js";
import { forwardRef } from "react";

type IconProps = Partial<React.SVGProps<SVGSVGElement>> & {
  id: string;
  addClass?: string;
  props?: unknown[];
};

const Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ id, width, height, fill, stroke, addClass = "", ...props }, ref) => (
    <svg
      width={width}
      height={height}
      fill={fill}
      stroke={stroke}
      aria-hidden="true"
      className={`${css.icon} ${addClass}`}
      ref={ref}
      {...props}
    >
      <use xlinkHref={`${sprite}#${id}`} />
    </svg>
  )
);

export default Icon;
