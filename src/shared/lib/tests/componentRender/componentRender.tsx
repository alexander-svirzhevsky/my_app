import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import i18n from '@/shared/config/i18n/i18nForTests';
import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';

type ComponentRenderOptions = {
    initialState?: StateSchema;
};

export const componentRender = (copmonent: ReactNode, options: ComponentRenderOptions = {}) => {
    const { initialState } = options;

    return render(
        <StoreProvider initialState={initialState}>
            <I18nextProvider i18n={i18n}>{copmonent}</I18nextProvider>
        </StoreProvider>,
    );
};
