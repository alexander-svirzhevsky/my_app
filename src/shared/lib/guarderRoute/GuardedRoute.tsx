import { getUserAuthData } from '@/entities/User';
import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

type GuardedRouteProps = {
  children: ReactNode;
};

export const GuardedRoute = ({ children }: GuardedRouteProps) => {
  const isAuth = useSelector(getUserAuthData);

  if (isAuth) {
    return children;
  }

  return <Navigate to='/' />;
};
