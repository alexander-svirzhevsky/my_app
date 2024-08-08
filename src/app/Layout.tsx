import { Outlet } from 'react-router-dom';
import './styles/index.css';
import { Navbar } from '@/widgets/Navbar';
import { SideBar } from '@/widgets/SideBar';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { userActions } from '@/entities/User';

export const Layout = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);
    return (
        <div className='app'>
            <Navbar />
            <div className='main-page'>
                <SideBar />
                <div className='main-content'>
                    <Button theme={ButtonTheme.PRIMARY}>primary</Button>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};
