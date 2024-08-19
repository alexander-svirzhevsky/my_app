import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './EditableProfileCard.module.css';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getProfileLoading } from '../../model/selectors/getProfileLoading/getProfileLoading';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { useCallback } from 'react';
import { ProfileCard } from '@/entities/Profile';
import { ProfileHeader } from '../ProfileHeader/ProfileHeader';
import { Loader } from '@/shared/ui/Loader/ui/Loader';
import { Text, TextTheme } from '@/shared/ui/Text';
import { profileActions } from '../../model/slice/profileSlice';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

type EditableProfileCardProps = {
  className?: string;
};

export const EditableProfileCard = ({ className }: EditableProfileCardProps) => {
  const dispath = useAppDispatch();
  const data = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);

  const onEditUsername = useCallback(
    (value: string) => {
      dispath(
        profileActions.modifyProfileForm({
          username: value || '',
        }),
      );
    },
    [dispath],
  );
  const onEditFirstname = useCallback(
    (value: string) => {
      dispath(
        profileActions.modifyProfileForm({
          firstname: value || '',
        }),
      );
    },
    [dispath],
  );
  const onEditLastname = useCallback(
    (value: string) => {
      dispath(
        profileActions.modifyProfileForm({
          lastname: value || '',
        }),
      );
    },
    [dispath],
  );
  const onEditAge = useCallback(
    (value: string) => {
      dispath(
        profileActions.modifyProfileForm({
          age: value.replace(/[^\d]/g, ''),
        }),
      );
    },
    [dispath],
  );
  const onChangeCountry = useCallback(
    (value: Country) => {
      dispath(
        profileActions.modifyProfileForm({
          country: value,
        }),
      );
    },
    [dispath],
  );
  const onChangeCurrency = useCallback(
    (value: Currency) => {
      dispath(profileActions.modifyProfileForm({ currency: value }));
    },
    [dispath],
  );
  const onChangeAvatar = useCallback(
    (value: string) => {
      dispath(
        profileActions.modifyProfileForm({
          avatar: value,
        }),
      );
    },
    [dispath],
  );

  if (isLoading) {
    return (
      <div className={classNames(cn['EditableProfileCard'], {}, [className])}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(cn['EditableProfileCard'], {}, [className])}>
        <Text
          text={TextTheme.ERROR}
          title='Something went wrong'
        />
      </div>
    );
  }

  if (data) {
    return (
      <div className={classNames(cn['EditableProfileCard'], {}, [className])}>
        <ProfileHeader />
        <ProfileCard
          readonly={readonly}
          profile={data}
          onEditUsername={onEditUsername}
          onEditFirstname={onEditFirstname}
          onEditLastname={onEditLastname}
          onEditAge={onEditAge}
          onChangeCountry={onChangeCountry}
          onChangeCurrency={onChangeCurrency}
          onChangeAvatar={onChangeAvatar}
        />
      </div>
    );
  }
};
