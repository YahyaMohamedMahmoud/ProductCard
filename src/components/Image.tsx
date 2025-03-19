interface IProps {
  src: string;
  alt: string;
  className?: string;
}
const Image = ({ alt, src, className }: IProps) => {
  return <img src={src} className={className} alt={alt} loading="eager"/>;
};

export default Image;
