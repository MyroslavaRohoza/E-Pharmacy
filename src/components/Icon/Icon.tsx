import css from "./icon.module.css";
import { icons as sprite } from "../../assets/index.js";
import { forwardRef } from "react";

export type IconProps = {
  id: string;
  width: number;
  height: number;
  fill: string;
  stroke: string;
  addClass?: string;
  props: unknown[];
} & React.SVGProps<SVGSVGElement>;

const Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ id, width, height, fill, stroke, addClass = "", ...props }, ref) => (
    <svg
      width={width}
      height={height}
      fill={fill}
      stroke={stroke}
      aria-hidden="true"
      className={`${addClass} ${css.icon}`}
      ref={ref}
      {...props}
    >
      <use xlinkHref={`${sprite}#${id}`} />
    </svg>
  )
);

export default Icon;
