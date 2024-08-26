import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './ProfileHeader.module.css';
import { Text } from '@/shared/ui/Text';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { profileActions } from '../../model/slice/profileSlice';
import { useSelector } from 'react-redux';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { putProfileData } from '../../model/services/putProfileData/putProfileData';
import { getUserAuthData } from '@/entities/User';
import { getProfileData } from '../../model/services/getProfileData/getProfileData';
import { getProfileValues } from '../../model/selectors/getProfileValues/getProfileValues';

type ProfileHeaderProps = {
  className?: string;
};

export const ProfileHeader = ({ className }: ProfileHeaderProps) => {
  const dispatch = useAppDispatch();
  const readonly = useSelector(getProfileReadonly);
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileValues);

  const canEdit = authData?.id === profileData?.id;

  const onEditHandler = () => {
    dispatch(profileActions.setReadonly(false));
  };

  const cancelHandler = () => {
    dispatch(profileActions.restoreForm());
  };

  const onSaveHandler = () => {
    dispatch(putProfileData(profileData.id));
  };

  return (
    <div className={classNames(cn['ProfileHeader'], {}, [className])}>
      <Text title='Profile' />
      {canEdit && (
        <div className={cn.btnWrapper}>
          {readonly && (
            <Button
              theme={ButtonTheme.PRIMARY}
              onClick={onEditHandler}
            >
              Edit
            </Button>
          )}
          {!readonly && (
            <div>
              <Button
                theme={ButtonTheme.CLEAR}
                onClick={cancelHandler}
              >
                Cancel
              </Button>
              <Button
                theme={ButtonTheme.PRIMARY}
                onClick={onSaveHandler}
              >
                Save
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
