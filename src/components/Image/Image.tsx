import clsx from "clsx";

type ImageType = {
  imagePath: string;
  imageAlt?: string;
  width?: number;
  height?: number;
  addClass?: string;
};

export default function Image({
  imagePath,
  imageAlt,
  width,
  height,
  addClass,
}: ImageType) {
  return (
    <img
      src={imagePath}
      alt={imageAlt}
      width={width}
      height={height}
      className={clsx(addClass && addClass)}
    />
  );
}
