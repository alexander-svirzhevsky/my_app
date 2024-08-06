import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './Modal.module.css';
import { ReactNode, useCallback, useEffect, useState } from 'react';

type ModalProps = {
    className?: string;
    children?: ReactNode;
    isOpened: boolean;
    onClose: () => void;
    lazy?: boolean;
};

export const Modal = ({ className, children, isOpened, onClose, lazy }: ModalProps) => {
    const [isMounted, setIsMounted] = useState(false);

    const mods: Record<string, boolean> = {
        [cn['isOpened']]: isOpened,
    };

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const onCloseModal = useCallback(() => {
        onClose();
    }, [onClose]);

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onCloseModal();
            }
        },
        [onCloseModal],
    );

    useEffect(() => {
        if (isOpened) {
            setIsMounted(true);
        }
    }, [isOpened]);

    useEffect(() => {
        if (isOpened) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpened]);

    if (lazy && !isMounted) {
        return null;
    }

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
