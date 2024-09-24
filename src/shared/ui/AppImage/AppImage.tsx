import { ImgHTMLAttributes, ReactNode, useLayoutEffect, useState } from 'react';

type AppImageProps = {
  className?: string;
  fallback?: ReactNode;
  errorFallback?: ReactNode;
} & ImgHTMLAttributes<HTMLImageElement>;

export const AppImage = ({
  className,
  fallback,
  errorFallback,
  src,
  alt = 'image',
  ...otherProps
}: AppImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useLayoutEffect(() => {
    const img = new Image();
    img.src = src ?? '';
    img.onload = () => {
      setIsLoading(false);
    };
    img.onerror = () => {
      setIsLoading(false);
      setHasError(true);
    };
  }, [src]);

  if (isLoading && fallback) {
    return fallback;
  }

  if (hasError && errorFallback) {
    return errorFallback;
  }

  return (
    <img
      className={className}
      src={src}
      alt={alt}
      {...otherProps}
    />
  );
};
