import { StyleDecorator } from '@/shared/config/storybook/StyleDecorator/StyleDecorator';
import type { Preview } from '@storybook/react';
import '../../src/app/styles/themes/normal.css';
import '../../src/app/styles/themes/dark.css';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [],
};

export default preview;
