import { Outlet } from 'react-router-dom';
import './styles/index.css';
import { useTheme } from './contexts/theme/ThemeContext';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Navbar } from '@/widgets/Navbar';
import { SideBar } from '@/widgets/SideBar';

export const Layout = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <div className='main-page'>
        <SideBar />
        <div className='main-content'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
