import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './ProfileHeader.module.css';
import { Text } from '@/shared/ui/Text';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { profileActions } from '../../model/slice/profileSlice';
import { useSelector } from 'react-redux';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { putProfileData } from '../../model/services/putProfileData/putProfileData';

type ProfileHeaderProps = {
  className?: string;
};

export const ProfileHeader = ({ className }: ProfileHeaderProps) => {
  const dispatch = useAppDispatch();
  const readonly = useSelector(getProfileReadonly);

  const onEditHandler = () => {
    dispatch(profileActions.setReadonly(false));
  };

  const cancelHandler = () => {
    dispatch(profileActions.restoreForm());
  };

  const onSaveHandler = () => {
    dispatch(putProfileData());
  };

  return (
    <div className={classNames(cn['ProfileHeader'], {}, [className])}>
      <Text title='Profile' />
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
  );
};
