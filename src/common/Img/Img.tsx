import { ImgHTMLAttributes } from "react";

export interface ImgProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}
export const Img = ({ src, alt, ...rest }: ImgProps) => {
  console.log("Img");
  return <img src={src} alt={alt} {...rest} />;
};
