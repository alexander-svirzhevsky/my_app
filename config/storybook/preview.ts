import { withThemeByClassName } from '@storybook/addon-themes';
import { withRouter } from 'storybook-addon-remix-react-router';

import type { Preview } from '@storybook/react';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        withRouter,
        withThemeByClassName<any>({
            themes: {
                light: 'app light',
                dark: 'app dark',
            },
            defaultTheme: 'light',
        }),
    ],
};

export default preview;
