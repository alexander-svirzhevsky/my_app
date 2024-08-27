import { useCallback, useMemo, useState } from 'react';

type UseHover = {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

type UseHoverResult = [boolean, UseHover];

export const useHover = (): UseHoverResult => {
  const [isHover, setIsHover] = useState(false);

  const onMouseEnter = useCallback(() => {
    setIsHover(true);
  }, []);

  const onMouseLeave = useCallback(() => {
    setIsHover(false);
  }, []);

  return useMemo(
    () => [isHover, { onMouseEnter, onMouseLeave }],
    [isHover, onMouseEnter, onMouseLeave],
  );
};
