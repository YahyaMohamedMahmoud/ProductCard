import { ImgHTMLAttributes } from "react";

interface IProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
}
const Image = ({ alt, src, className }: IProps) => {
  return <img src={src} className={className} alt={alt} loading="lazy" />;
};

export default Image;
