import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './LoginModal.module.css';
import { Modal } from '@/shared/ui/Modal';
import { LoginForm } from '../LoginForm/LoginForm';

type LoginModalProps = {
    className?: string;
    isOpened: boolean;
    onClose: () => void;
};

export const LoginModal = ({ className, isOpened, onClose }: LoginModalProps) => {
    return (
        <Modal
            className={classNames(cn['LoginModal'], {}, [className])}
            isOpened={isOpened}
            onClose={onClose}
            lazy
        >
            <LoginForm />
        </Modal>
    );
};
