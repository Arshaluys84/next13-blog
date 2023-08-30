"use client";

import { useState } from "react";

import Image from "next/image";

import { DEFAULT_IMAGE_URL } from "@/constants/constants";

export const ImageWithError = ({ imageUrl }: { imageUrl: string }) => {
  const [imageSrc, setImageSrc] = useState<string>(imageUrl);
  const [hasError, setHasError] = useState<boolean>(false);

  const handleImageError = () => {
    if (!hasError) {
      setImageSrc(DEFAULT_IMAGE_URL);
      setHasError(true);
    }
  };

  return (
    <Image
      src={imageSrc}
      className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
      alt="Image"
      width={800}
      height={600}
      onError={handleImageError}
    />
  );
};
