"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";

interface ImageWithFallbackProps extends Omit<ImageProps, "src" | "alt"> {
  src: string;
  alt: string;
  fallbackSrc?: string;
}

export function ImageWithFallback({
  src,
  alt,
  fallbackSrc = "https://placehold.co/600x400/1a1a1a/444444?text=Image+Not+Found",
  ...rest
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      onError={() => {
        setImgSrc(fallbackSrc);
      }}
      {...rest}
    />
  );
}
