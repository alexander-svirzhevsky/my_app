import i18n from '@/shared/config/i18n/i18nForTests';
import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';

export const renderWithTranslation = (copmonent: ReactNode) => {
    return render(<I18nextProvider i18n={i18n}>{copmonent}</I18nextProvider>);
};
