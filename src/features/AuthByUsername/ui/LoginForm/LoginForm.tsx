import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './LoginForm.module.css';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { useSelector } from 'react-redux';
import { authActions, authReducer } from '../../model/slice/authSlice';
import { useCallback } from 'react';
import { loginByUsername } from '../../model/services/login/login';
import { Text, TextTheme } from '@/shared/ui/Text';
import { useTranslation } from 'react-i18next';
import { getAuthUsername } from '../../model/selectors/getAuthUsername/getAuthUsername';
import { getAuthPassword } from '../../model/selectors/getAuthPassword/getAuthPassword';
import { getAuthError } from '../../model/selectors/getAuthError/getAuthError';
import { getAuthLoading } from '../../model/selectors/getAuthLoading/getAuthLoading';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/dynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

type LoginFormProps = {
  className?: string;
  onSuccess?: () => void;
};

const initialReducers: ReducersList = {
  auth: authReducer,
};

export const LoginForm = ({ className, onSuccess }: LoginFormProps) => {
  const { t } = useTranslation('main');

  const dispath = useAppDispatch();

  const username = useSelector(getAuthUsername);
  const password = useSelector(getAuthPassword);
  const error = useSelector(getAuthError);
  const isLoading = useSelector(getAuthLoading);

  const onNameChange = useCallback(
    (val: string) => {
      dispath(authActions.setName(val));
    },
    [dispath],
  );

  const onPasswordChange = useCallback(
    (val: string) => {
      dispath(authActions.setPassword(val));
    },
    [dispath],
  );

  const onSubmit = async () => {
    const result = await dispath(loginByUsername({ username, password }));
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess?.();
    }
  };

  return (
    <DynamicModuleLoader
      name='auth'
      reducers={initialReducers}
      removeAfterUnmount
    >
      <div className={classNames(cn['LoginForm'], {}, [className])}>
        <Text title={t('auth_form')} />
        {error && (
          <Text
            text={error}
            theme={TextTheme.ERROR}
          />
        )}
        <Input
          autoFocus
          placeholder='name'
          label='name'
          value={username}
          onChange={onNameChange}
        />
        <Input
          placeholder='password'
          label='password'
          value={password}
          onChange={onPasswordChange}
        />
        <Button
          onClick={onSubmit}
          theme={ButtonTheme.PRIMARY}
          disabled={isLoading}
        >
          Submit
        </Button>
      </div>
    </DynamicModuleLoader>
  );
};
