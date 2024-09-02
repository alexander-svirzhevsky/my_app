import { Counter } from '@/entities/Counter';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Modal } from '@/shared/ui/Modal';
import { Page } from '@/shared/ui/Page';
import { Portal } from '@/shared/ui/Portal';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

type HomeProps = {};

export const Home = ({}: HomeProps) => {
  const { t } = useTranslation('home');

  return (
    <Page>
      <div>{t('home_page')}</div>
      <Counter />
    </Page>
  );
};
