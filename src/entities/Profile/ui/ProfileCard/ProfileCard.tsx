import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './ProfileCard.module.css';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useEffect } from 'react';
import { profileActions } from '../../model/slice/profileSlice';
import { getProfileData } from '../../model/services/getProfileData/getProfileData';
import { Text } from '@/shared/ui/Text';
import { useSelector } from 'react-redux';
import { getProfileValues } from '../../model/selectors/getProfileValues/getProfileValues';
import { getProfileLoading } from '../../model/selectors/getProfileLoading/getProfileLoading';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';

type ProfileCardProps = {
  className?: string;
};

export const ProfileCard = ({ className }: ProfileCardProps) => {
  const dispatch = useAppDispatch();
  const data = useSelector(getProfileValues);
  const isLoading = useSelector(getProfileLoading);
  const error = useSelector(getProfileError);

  useEffect(() => {
    dispatch(getProfileData());
  }, []);

  return (
    <div className={classNames(cn['ProfileCard'], {}, [className])}>
      <Text title='' />
    </div>
  );
};
