import { getUserAuthData } from '@/entities/User';
import { createSelector } from '@reduxjs/toolkit';
import { SideBarItemType } from '../types/sideBar';
import { Routes } from '@/shared/constant/routes';
import HomeIcon from '@/shared/assets/home.svg';
import ProfileIcon from '@/shared/assets/profile.svg';
import ArticlesIcon from '@/shared/assets/articles.svg';

export const getSideBarItems = createSelector(getUserAuthData, (userData) => {
  const sideBarItemsList: SideBarItemType[] = [
    {
      path: Routes.Main,
      text: 'Home page',
      Icon: HomeIcon,
    },
  ];

  if (userData) {
    sideBarItemsList.push(
      {
        path: `${Routes.Profile}/${userData?.id}`,
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
    );
  }
  return sideBarItemsList;
});
