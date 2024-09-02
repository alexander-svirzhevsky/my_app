import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './Page.module.css';
import { MutableRefObject, ReactNode, UIEvent, useEffect, useRef } from 'react';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { scrollSaveActions } from '@/features/ScrollSave';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StateSchema } from '@/app/providers/StoreProvider';
import { getScrollByPath } from '@/features/ScrollSave/model/selectors/scrollSave';
import { useThrottle } from '@/shared/lib/useThrottle/useThrottle';

type PageProps = {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
};

export const Page = ({ className, children, onScrollEnd }: PageProps) => {
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  const scrollPosition = useSelector((state: StateSchema) => getScrollByPath(state, pathname));

  useInfiniteScroll({
    wrapperRef,
    triggerRef,
    callback: onScrollEnd,
  });

  useEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  }, []);

  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(
      scrollSaveActions.setScrollPosition({
        position: e.currentTarget.scrollTop,
        path: pathname,
      }),
    );
  }, 500);

  return (
    <div
      ref={wrapperRef}
      className={classNames(cn['Page'], {}, [className])}
      onScroll={onScroll}
    >
      {children}
      <div ref={triggerRef} />
    </div>
  );
};
