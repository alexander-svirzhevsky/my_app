import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './ToggleThemeButton.module.css';
import { useTheme } from '@/app/contexts/theme';
import { Button } from '@/shared/ui/Button';
import { ButtonTheme } from '@/shared/ui/Button/ui/Button';
import SunIcon from '@/shared/assets/sun.svg';
import MoonIcon from '@/shared/assets/moon.svg';
import { Theme } from '@/app/contexts/theme/ThemeContext';

type ToggleThemeButtonProps = {
  className?: string;
};

export const ToggleThemeButton = ({ className }: ToggleThemeButtonProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      onClick={toggleTheme}
      className={classNames(cn['toggleThemeButton'], {}, [className])}
    >
      {theme === Theme.LIGHT ? <MoonIcon fill='yellow' /> : <SunIcon />}
    </Button>
  );
};
