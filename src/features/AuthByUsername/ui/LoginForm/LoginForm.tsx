import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './LoginForm.module.css';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../model/slice/authSlice';
import { useCallback } from 'react';
import { getAuthState } from '../../model/selectors/getAuthState/getAuthState';
import { loginByUsername } from '../../model/sevices/login/login';
import { AppDispatch } from '@/app/providers/StoreProvider/config/store';
import { Text, TextTheme } from '@/shared/ui/Text';
import { useTranslation } from 'react-i18next';

type LoginFormProps = {
    className?: string;
};

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation('main');
    const dispath: AppDispatch = useDispatch();
    const { username, password, error, isLoading } = useSelector(getAuthState);

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

    const onSubmit = () => {
        dispath(loginByUsername({ username, password }));
    };

    return (
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
    );
};
