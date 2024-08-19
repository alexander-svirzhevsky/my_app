import { Outlet } from 'react-router-dom';
import { Navbar } from '@/widgets/Navbar';
import { SideBar } from '@/widgets/SideBar';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUserMountedValue, userActions } from '@/entities/User';
import './styles/index.css';

export const Layout = () => {
  const dispatch = useDispatch();
  const mounted = useSelector(getUserMountedValue);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className='app'>
      <Navbar />
      <div className='main-page'>
        <SideBar />
        <div className='main-content'>{mounted && <Outlet />}</div>
      </div>
    </div>
  );
};
