import { profileReducer } from '@/entities/Profile';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/dynamicModuleLoader/DynamicModuleLoader';
import { useTranslation } from 'react-i18next';

const initialReducers: ReducersList = {
  profile: profileReducer,
};

export const Profile = () => {
  const { t } = useTranslation();

  return (
    <DynamicModuleLoader
      name='profile'
      reducers={initialReducers}
      removeAfterUnmount
    >
      <span>{t('profile_page')}</span>
    </DynamicModuleLoader>
  );
};
