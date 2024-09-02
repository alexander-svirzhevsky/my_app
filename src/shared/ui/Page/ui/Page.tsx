import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './Page.module.css';
import { MutableRefObject, ReactNode, useRef } from 'react';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';

type PageProps = {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
};

export const Page = ({ className, children, onScrollEnd }: PageProps) => {
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInfiniteScroll({
    wrapperRef,
    triggerRef,
    callback: onScrollEnd,
  });

  return (
    <div
      ref={wrapperRef}
      className={classNames(cn['Page'], {}, [className])}
    >
      {children}
      <div ref={triggerRef} />
    </div>
  );
};
