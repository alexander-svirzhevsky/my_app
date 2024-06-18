import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './SideBar.module.css';
import { useState } from 'react';
import { ToggleThemeButton } from '@/widgets/ToggleThemeButton';
import { LangToggler } from '@/widgets/LangToggler';
import { Button } from '@/shared/ui/Button';

type SideBarProps = {
    className?: string;
};

export const SideBar = ({ className }: SideBarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid='sidebar'
            className={classNames(cn['sideBar'], { [cn['collapsed']]: collapsed }, [className])}
        >
            <Button
                data-testid='sidebar-toggle'
                onClick={onToggle}
            >
                toggle
            </Button>
            <div className={cn['switchers']}>
                <ToggleThemeButton />
                <LangToggler />
            </div>
        </div>
    );
};
