import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './LoginForm.module.css';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';

type LoginFormProps = {
    className?: string;
};

export const LoginForm = ({ className }: LoginFormProps) => {
    return (
        <div className={classNames(cn['LoginForm'], {}, [className])}>
            <Input
                autoFocus
                placeholder='name'
                label='name'
            />
            <Input
                placeholder='password'
                label='password'
            />
            <Button>Submit</Button>
        </div>
    );
};
