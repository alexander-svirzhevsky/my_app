import { Link, Outlet } from 'react-router-dom';
import './styles/index.css';
import { useTheme } from './contexts/theme/ThemeContext';
import { classNames } from '@/shared/lib/classNames/classNames';

export const Layout = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>change theme</button>
      <h1>Layout</h1>
      <Link to='news'>Go to news</Link>
      <Link to='/'>Go to home</Link>
      <Outlet />
    </div>
  );
};
