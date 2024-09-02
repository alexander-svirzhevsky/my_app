import { MutableRefObject, useEffect } from 'react';

type UseInfiniteScrollOptions = {
  callback?: () => void;
  triggerRef: MutableRefObject<HTMLDivElement>;
  wrapperRef: MutableRefObject<HTMLDivElement>;
};

export const useInfiniteScroll = ({
  callback,
  triggerRef,
  wrapperRef,
}: UseInfiniteScrollOptions) => {
  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    const wrapperElement = wrapperRef.current;
    const triggerElement = triggerRef.current;

    if (callback) {
      const options = {
        root: wrapperElement,
        rootMargin: '0px',
        threshold: 1.0,
      };

      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          callback();
        }
      }, options);

      observer.observe(triggerElement);
    }

    return () => {
      if (observer && triggerElement) {
        observer.unobserve(triggerElement);
      }
    };
  }, [triggerRef, wrapperRef, callback]);
};
