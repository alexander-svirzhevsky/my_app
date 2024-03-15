import { Outlet } from 'react-router-dom';
import './styles/index.css';
import { useTheme } from './contexts/theme/ThemeContext';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Navbar } from '@/widgets/Navbar';
import { Button } from '@/shared/ui/Button';
import { ButtonTheme } from '@/shared/ui/Button/ui/Button';
import { ToggleThemeButton } from '@/widgets/ToggleThemeButton';

export const Layout = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar>
        <ToggleThemeButton />
      </Navbar>
      <Outlet />
    </div>
  );
};
