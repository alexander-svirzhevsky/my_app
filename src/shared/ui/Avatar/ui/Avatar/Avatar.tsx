import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './Avatar.module.css';
import { CSSProperties } from 'react';
import { AppImage } from '@/shared/ui/AppImage/AppImage';
import { Skeleton } from '@/shared/ui/Skeleton';

type AvatarProps = {
  className?: string;
  src: string;
  alt?: string;
  size?: number;
};

export const Avatar = ({ className, src, size = 50, alt = 'avatar' }: AvatarProps) => {
  const styles: CSSProperties = {
    width: size,
    height: size,
  };

  return (
    <AppImage
      src={src}
      alt={alt}
      style={styles}
      className={classNames(cn['Avatar'], {}, [className])}
      fallback={
        <Skeleton
          width={50}
          height={50}
          border='50%'
        />
      }
    />
  );
};
