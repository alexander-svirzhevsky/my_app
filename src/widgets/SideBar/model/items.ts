import { FC, SVGProps } from 'react';
import { Routes } from '@/shared/constant/routes';
import HomeIcon from '@/shared/assets/home.svg';
import ProfileIcon from '@/shared/assets/profile.svg';
import ArticlesIcon from '@/shared/assets/articles.svg';

export type SideBarItemType = {
  path: string;
  text: string;
  Icon: FC<SVGProps<SVGSVGElement>>;
  authRequired?: boolean;
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
    authRequired: true,
  },
  {
    path: Routes.Articles,
    text: 'Articles page',
    Icon: ArticlesIcon,
    authRequired: true,
  },
];
