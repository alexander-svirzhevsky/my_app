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
import { useParams } from 'react-router-dom';

const initialReducers: ReducersList = {
  profile: profileReducer,
};

export const Profile = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      dispatch(getProfileData(id));
    }
  }, []);

  return (
    <DynamicModuleLoader
      name='profile'
      reducers={initialReducers}
    >
      <EditableProfileCard />
    </DynamicModuleLoader>
  );
};
