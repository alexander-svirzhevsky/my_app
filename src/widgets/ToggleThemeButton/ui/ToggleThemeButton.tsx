import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './ToggleThemeButton.module.css';
import { useTheme } from '@/app/contexts/theme';
import { Button } from '@/shared/ui/Button';
import { ButtonTheme } from '@/shared/ui/Button/ui/Button';
import SunIcon from 'shared/assets/sun.svg';
import MoonIcon from 'shared/assets/moon.svg';
import { Theme } from '@/app/contexts/theme/ThemeContext';
import { memo } from 'react';

type ToggleThemeButtonProps = {
  className?: string;
};

export const ToggleThemeButton = memo(({ className }: ToggleThemeButtonProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      onClick={toggleTheme}
      className={classNames(cn['toggleThemeButton'], {}, [className])}
    >
      {theme === Theme.LIGHT ? <MoonIcon fill='#757575' /> : <SunIcon fill='yellow' />}
    </Button>
  );
});
