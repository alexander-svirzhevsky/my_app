import cn from './SideBarItem.module.css';
import { AppLink } from '@/shared/ui/AppLink';
import { SideBarItemType } from '../../model/items';
import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';

type SideBarItemProps = {
  item: SideBarItemType;
  collapsed: boolean;
};

export const SideBarItem = memo(({ item, collapsed }: SideBarItemProps) => {
  const isAuth = useSelector(getUserAuthData);

  if (item.authRequired && !isAuth) {
    return null;
  }

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
