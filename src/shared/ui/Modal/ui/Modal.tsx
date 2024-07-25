import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './Modal.module.css';
import { ReactNode, useCallback, useEffect } from 'react';
import { useTheme } from '@/app/contexts/theme';

type ModalProps = {
    className?: string;
    children?: ReactNode;
    isOpened: boolean;
    onClose: () => void;
};

export const Modal = ({ className, children, isOpened, onClose }: ModalProps) => {
    const { theme } = useTheme();
    console.log('theme: ', theme);

    const mods: Record<string, boolean> = {
        [cn['isOpened']]: isOpened,
        [cn[theme]]: true,
    };

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const onCloseModal = useCallback(() => {
        onClose();
    }, [onClose]);

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            console.log(e.key);

            if (e.key === 'Escape') {
                onCloseModal();
            }
        },
        [onCloseModal],
    );

    useEffect(() => {
        if (isOpened) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpened]);

    return (
        <div className={classNames(cn['modal'], mods, [className])}>
            <div
                className={cn['overlay']}
                onClick={onCloseModal}
            >
                <div
                    className={cn['content']}
                    onClick={onContentClick}
                >
                    {children}
                </div>
            </div>
        </div>
    );
};
