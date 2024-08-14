import { FC, SVGProps } from 'react';
import { Routes } from '@/shared/constant/routes';
import HomeIcon from '@/shared/assets/home.svg';
import ProfileIcon from '@/shared/assets/profile.svg';

export type SideBarItemType = {
  path: string;
  text: string;
  Icon: FC<SVGProps<SVGSVGElement>>;
};

export const sideBarItemsList: SideBarItemType[] = [
  {
    path: Routes.Main,
    text: 'Home page',
    Icon: HomeIcon,
  },
  {
    path: Routes.Profile,
    text: 'Profile page',
    Icon: ProfileIcon,
  },
];
