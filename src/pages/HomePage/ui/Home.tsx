import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Modal } from '@/shared/ui/Modal';
import { Portal } from '@/shared/ui/Portal';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

type HomeProps = {};

export const Home = ({}: HomeProps) => {
    const { t } = useTranslation('home');

    return (
        <>
            <div>{t('home_page')}</div>
        </>
    );
};
