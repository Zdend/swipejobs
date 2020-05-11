import { useEffect, useState } from 'react';

type UseImageResult = [boolean, string?];

/**
 * Loads an image and returns a state of loading.
 * Useful when displaying a fallback image.
 */
export const useImage = (src?: string): UseImageResult => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (!src) {
      return;
    }
    const image = new Image();
    image.src = src;
    image.onload = () => {
      if (image.complete) {
        setImageLoaded(true);
      }
    };
    // eslint-disable-next-line consistent-return
    return () => {
      image.onload = null;
    };
  }, [src]);

  return [imageLoaded, src];
};
