import { Outlet } from 'react-router-dom';
import './styles/index.css';
import { Navbar } from '@/widgets/Navbar';
import { SideBar } from '@/widgets/SideBar';
import { Button, ButtonTheme } from '@/shared/ui/Button';

export const Layout = () => {
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
