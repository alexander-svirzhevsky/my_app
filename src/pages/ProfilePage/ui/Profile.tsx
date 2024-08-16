import {
  EditableProfileCard,
  getProfileData,
  profileReducer,
} from '@/features/EditableProfileCard';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/dynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const initialReducers: ReducersList = {
  profile: profileReducer,
};

export const Profile = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProfileData());
  }, []);

  return (
    <DynamicModuleLoader
      name='profile'
      reducers={initialReducers}
      removeAfterUnmount
    >
      <EditableProfileCard />
    </DynamicModuleLoader>
  );
};
