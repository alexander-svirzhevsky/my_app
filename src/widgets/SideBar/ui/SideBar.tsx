import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './SideBar.module.css';
import { useState } from 'react';
import { ToggleThemeButton } from '@/widgets/ToggleThemeButton';
import { LangToggler } from '@/widgets/LangToggler';

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
      className={classNames(cn['sideBar'], { [cn['collapsed']]: collapsed }, [
        className,
      ])}
    >
      <button onClick={onToggle}>toggle</button>
      <div className={cn['switchers']}>
        <ToggleThemeButton />
        <LangToggler />
      </div>
    </div>
  );
};
