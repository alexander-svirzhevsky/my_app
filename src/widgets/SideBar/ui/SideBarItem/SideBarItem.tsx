import cn from './SideBarItem.module.css';
import { AppLink } from '@/shared/ui/AppLink';
import { SideBarItemType } from '../../model/items';
import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';

type SideBarItemProps = {
  item: SideBarItemType;
  collapsed: boolean;
};

export const SideBarItem = memo(({ item, collapsed }: SideBarItemProps) => {
  return (
    <AppLink
      to={item.path}
      className={classNames(cn['link'], { [cn['collapsed']]: collapsed })}
    >
      <item.Icon className={cn['icon']} />
      <span className={cn['text']}>{item.text}</span>
    </AppLink>
  );
});
